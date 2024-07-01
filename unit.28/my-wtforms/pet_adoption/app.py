from flask import Flask, render_template, flash, redirect, url_for
from models import db, connect_db, Pets
from forms import AddPet, EditPetForm
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.config["SECRET_KEY"] = "oh-so-secret"
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql:///pet_adoption"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

connect_db(app)


toolbar = DebugToolbarExtension(app)

app.app_context().push()


@app.route('/')
def home_page():
    """home page listing all the pets avialbel with our adoption database"""
    pets = Pets.query.all()
    return render_template('home.html', pets=pets)





@app.route('/add_pet', methods=["GET", "POST"])
def add_pet_form():
    form = AddPet()
    
    if form.validate_on_submit():
        pet_name = form.pet_name.data
        pet_species = form.pet_species.data
        pet_age = form.pet_age.data
        pet_photo = form.pet_photo.data
        pet_notes = form.pet_notes.data
        pet_available = form.pet_available.data

        pet = Pets(pet_name=pet_name, pet_species=pet_species, pet_age=pet_age, pet_photo=pet_photo, pet_notes=pet_notes, pet_available=pet_available)
        db.session.add(pet)
        db.session.commit()
        return redirect('/')
    
    return render_template('add_pet_form.html', form=form)



@app.route('/pet/<int:pet_id>/edit', methods=["GET", "POST"])
def edit_pet(pet_id):
    pet = Pets.query.get_or_404(pet_id)
    form = EditPetForm(obj=pet)

    if form.validate_on_submit():
        pet.pet_name = form.pet_name.data
        pet.pet_species = form.pet_species.data
        pet.pet_photo = form.pet_photo.data
        pet.pet_age = form.pet_age.data
        pet.pet_notes = form.pet_notes.data
        pet.pet_available = form.pet_available.data

        db.session.commit()
        return redirect(url_for('pet_details', pet_id=pet.id))

    return render_template('edit_pet_form.html', form=form, pet=pet)

@app.route('/pet/<int:pet_id>')
def pet_details(pet_id):
    pet = Pets.query.get_or_404(pet_id)
    return render_template('pet_details.html', pet=pet)












