"""Blogly application."""

from flask import Flask, request, redirect, render_template, session

from models import db, connect_db, User



app = Flask(__name__)

app.app_context().push()


app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

connect_db(app)
db.create_all()

@app.route('/')
def list_users():
    """Shows list of all users in the database"""
    users = User.query.all()  # Retrieve all users
    return render_template('home.html', users=users)

@app.route('/add', methods=['GET', 'POST'])
def add_user():
    """Add a new user"""
    if request.method == 'POST':
        first_name = request.form['first_name']
        last_name = request.form['last_name']
        image_url = request.form['image_url'] or None

        new_user = User(first_name=first_name, last_name=last_name, image_url=image_url)
        db.session.add(new_user)
        db.session.commit()
        return redirect('/')
    
    return render_template('add_user.html')

@app.route('/user/<int:user_id>')
def show_user(user_id):
    """Show details of a specific user"""
    user = User.query.get_or_404(user_id)  # Retrieve user by ID or 404 if not found
    return render_template('user_detail.html', user=user)

@app.route('/user/<int:user_id>/edit', methods=['GET', 'POST'])
def edit_user(user_id):
    """Edit a specific user's information"""
    user = User.query.get_or_404(user_id)
    if request.method == 'POST':
        user.first_name = request.form['first_name']
        user.last_name = request.form['last_name']
        user.image_url = request.form['image_url'] or user.image_url
        db.session.commit()
        return redirect(f'/user/{user_id}')
    
    return render_template('edit_user.html', user=user)

@app.route('/user/<int:user_id>/delete', methods=['POST'])
def delete_user(user_id):
    """Delete a specific user"""
    user = User.query.get_or_404(user_id)
    db.session.delete(user)
    db.session.commit()
    return redirect('/')



