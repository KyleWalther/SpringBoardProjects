from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, BooleanField, IntegerField, RadioField, SelectField
from wtforms.validators import InputRequired, Email, Optional, NumberRange, Length, URL



class AddPet(FlaskForm):
    pet_name = StringField("Animal Name", validators=[InputRequired()])
    pet_species = SelectField("Animal Species",
                              choices=[("cat", "Cat"), ("dog", "Dog"), ("cheetah", "Cheetah"), ("porcupine", "Porcupine")])
    pet_photo = StringField("Animal Photo URL", validators=[Optional(), URL()])
    pet_age = IntegerField("Animal Age", validators=[Optional(), NumberRange(min=0, max=30)])
    pet_notes = StringField("Animal Notes", validators=[Optional()])
    pet_available = BooleanField("Available", validators=[Optional()])
    
    

class EditPetForm(FlaskForm):
    pet_name = StringField("Animal Name", validators=[InputRequired()])
    pet_species = SelectField("Animal Species", choices=[("cat", "Cat"), ("dog", "Dog"), ("cheetah", "Cheetah"), ("porcupine", "Porcupine")])
    pet_photo = StringField("Animal Photo URL", validators=[Optional(), URL()])
    pet_age = IntegerField("Animal Age", validators=[Optional(), NumberRange(min=0, max=30)])
    pet_notes = StringField("Animal Notes", validators=[Optional()])
    pet_available = BooleanField("Available", validators=[Optional()])










