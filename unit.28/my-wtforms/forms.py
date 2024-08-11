from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, BooleanField, IntegerField, RadioField, SelectField
from wtforms.validators import InputRequired, Email, Optional


states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA",
          "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
          "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
          "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
          "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]


class AddSnackForm(FlaskForm):
    email = StringField("Email", validators=[Optional(), Email()])
    name = StringField("Snack Name",  validators=[
                       InputRequired(message="Snack Name can't be blank")])
    price = FloatField("Price in USD")
    quantity = IntegerField("How many?")
    is_healthy = BooleanField("This is a healthy snack")

    # category = RadioField("Category", choices=[
    #                       ('ic', 'Ice Cream'),  ('chips', 'Potato Chips'),  ('candy', 'Candy/Sweets')])
    category = SelectField("Category", choices=[
                          ('ic', 'Ice Cream'),  ('chips', 'Potato Chips'),  ('candy', 'Candy/Sweets')])


class EmployeeForm(FlaskForm):
    name = StringField("Employee Name", validators=[
                       InputRequired(message="Name cannot be blank")])
    state = SelectField('State', choices=[(st, st) for st in states])
    dept_code = SelectField("Department Code")






# class AddSnackForm(FlaskForm):
#     """a form for adding snacks"""
#     email= StringField('email', validators=[Email()])
#     name = StringField("Snack Name", validators=[InputRequired(message="Snack name can not be blank")])
#     price = FloatField("Price in USD", validators=[Optional()])
    
    

# class EmployeeForm(FlaskForm):

#     name = StringField("Employee Name")
#     state = StringField("Employee State")
#     dept_code = SelectField("Department Code")







# class FieldExamples(FlaskForm):

#     string = StringField('string field')#shows a string
#     float = FloatField('flaot field')#shows a float
#     boolean = BooleanField('boolean field')#shows a check box
#     integer = IntegerField('integer field')#shows an integer
#     radio = RadioField('radio field with options', choices=[
#         ('opt1','option one'), ('opt2', 'option two', ('opt3', 'option three'))
#         ])#the value is listed first, then the actually tect that will display next to the radio button. 
#     select = SelectField('radio field with options', choices=[
#         ('opt1','option one'), ('opt2', 'option two', ('opt3', 'option three'))
#         ])#the value is listed first, then the actually tect that will display the choices as a drop down select menu
#     select = SelectField('radio field with options', choices=[
#         ('1','option one'), ('2', 'option two', ('3', 'option three'))
#         ], coerce=int)#thhis sets it up so the selct menue will display integers instaed of strings
        











