from flask import Flask, request, redirect, render_template, session
# from flask_debugtoolbar import DebugToolbarExtension

from models import db, connect_db, Pet



app = Flask(__name__)


app.app_context().push()

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///pet_shop_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "thisismysecretkey"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
# debug = DebugToolbarExtension(app)

connect_db(app)


@app.route('/')
def list_pets():
    """shows lists of all pets in db"""
    pets = Pet.query.all() #gives us all pets

    return render_template('list.html', pets=pets)


@app.route('/', methods=["POST"])
def create_pet():
    """Allowing the user to add a pet"""
    name = request.form['name']
    species = request.form['species']
    hunger = request.form['hunger']
    hunger = int(hunger) if hunger else None

    new_pet = Pet(name=name, species=species, hunger=hunger)
    db.session.add(new_pet)
    db.session.commit()

    return redirect(f'/{new_pet.id}')

@app.route('/<int:pet_id>')
def show_pet(pet_id):
    """How details about a single pet"""
    pet = Pet.query.get_or_404(pet_id)

    return render_template("details.html", pet=pet)


@app.route('/species/<string:species_id>')
def show_pets_by_species(species_id):
    pets = Pet.get_by_species(species_id)
    return render_template("species.html", pets=pets, species=species_id)











