
from flask import Flask, render_template, redirect, session, flash
# from flask_debugtoolbar import DebugToolbarExtension
from models import connect_db, db, User, Feedback

from forms import SignUpForm, LoginForm, FeedbackForm
from sqlalchemy.exc import IntegrityError

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql:///authentication"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_ECHO"] = True
app.config["SECRET_KEY"] = "abc123"
# app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False


app.app_context().push()



connect_db(app)
db.create_all()



@app.route('/')
def main_page():

    return render_template('home.html')



@app.route('/secret', methods=['GET', 'POST'])
def secret_page():
    if "user_id" not in session:
        flash('Please Login first')
        return redirect('/login')
    
    form = FeedbackForm()
    all_feedback = Feedback.query.all()
    
    if form.validate_on_submit():
        title = form.title.data
        content = form.content.data
        new_feedback = Feedback(title=title, content=content, user_id=session['user_id'])
        db.session.add(new_feedback)
        db.session.commit()
        flash('Created feedback', 'success')
        return redirect('/secret')

    return render_template('secret.html', form=form, feedback=all_feedback)

@app.route('/secret/<int:id>', methods=['POST'])
def del_feedback(id):
    if 'user_id' not in session:
        flash('please login')
        return redirect('/login')
    feedback = Feedback.query.get_or_404(id)
    if feedback.user_id == session['user_id']:
        db.session.delete(feedback)
        db.session.commit()
        flash('Deleted')
        
    else:
        flash("You dont have the power to delete that!")
    return redirect('/secret')



@app.route('/register', methods=['GET', 'POST'])
def register_user():
    form = SignUpForm()
    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data
        email = form.email.data
        first_name = form.first_name.data
        last_name = form.last_name.data

        add_user = User.register(username=username, password=password, email=email, first_name=first_name, last_name=last_name)
        db.session.add(add_user)
        db.session.commit()
        session['user_id'] = add_user.id

        flash('User successfully registered!', 'success')
        return redirect('/secret')
    else:
        return render_template('sign_up_form.html', form=form)


@app.route('/login', methods=['GET', 'POST'])
def login_user():
    form = LoginForm()
    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data

        user = User.authenticate(username, password)
        if user:
            flash('welcome back, {user.username}')
            session['user_id'] = user.id
            return redirect('/secret')
        else:
            form.username.errors = ['Invalid usernaem/password.']

    return render_template('login.html', form=form)



# making this in to a post route is best practice
@app.route('/logout')
def logout():
    session.pop('user_id')
    flash("goodbye")
    return render_template('home.html')


# @app.route('/users/<username>')


















