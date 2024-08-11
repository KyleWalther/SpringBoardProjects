from flask import Flask, render_template, request, redirect
from models import db, connect_db, Sport, Sponsor

app = Flask(__name__)

# Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///kylewalther'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

# Connect to the database
connect_db(app)
app.app_context().push()

@app.route('/')
def sport_list():
    """Route to list all sports"""
    sports = Sport.query.all()
    return render_template('home.html', sports=sports)

@app.route('/add_sport', methods=['GET', 'POST'])
def add_sport():
    """Route to add sport"""
    if request.method == 'POST':
        sport_name = request.form['sport_name']
        sport_popularity = request.form['sport_popularity']

        new_sport = Sport(name=sport_name, popularity=sport_popularity)
        db.session.add(new_sport)
        db.session.commit()
        return redirect('/')
    
    return render_template('add_sport_form.html')

@app.route('/sponsor_list')
def sponsor_list():
    sponsors = Sponsor.query.all()
    return render_template('sponsor_list.html', sponsors=sponsors)

@app.route('/add_sponsor', methods=['GET', 'POST'])
def add_sponsor():
    if request.method == 'POST':
        sponsor_name = request.form['sponsor_name']

        new_sponsor = Sponsor(name=sponsor_name)
        db.session.add(new_sponsor)

        try:
            db.session.commit()
            return redirect('/sponsor_list')
        except Exception as e:
            db.session.rollback()
            return f"Error: Failed to add sponsor. {str(e)}"
    
    return render_template('add_sponsor_form.html')

if __name__ == '__main__':
    app.run(debug=True)











