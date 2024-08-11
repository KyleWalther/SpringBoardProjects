from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField
from wtforms.validators import DataRequired, Email, Length



from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField
from wtforms.validators import DataRequired, Email, Length

class SignUpForm(FlaskForm):
    """Form for adding a user to our site and database"""
    username = StringField(
        'Username',
        validators=[DataRequired(), Length(min=1, max=20)]
    )
    password = PasswordField(
        'Password',
        validators=[DataRequired()]
    )
    email = StringField(
        'Email',
        validators=[DataRequired(), Email(), Length(max=50)]
    )
    first_name = StringField(
        'First Name',
        validators=[DataRequired(), Length(max=30)]
    )
    last_name = StringField(
        'Last Name',
        validators=[DataRequired(), Length(max=30)]
    )

class LoginForm(FlaskForm):
    """Form for login a user in"""
    username = StringField(
        'Username',
        validators=[DataRequired(), Length(min=1, max=20)]
    )
    password = PasswordField(
        'Password',
        validators=[DataRequired()]
    )

class FeedbackForm(FlaskForm):
    title = StringField(
        'title',
        validators=[DataRequired(), Length(max=30)]

    )
    content = StringField(
        'content',
        validators=[DataRequired(), Length(max=300)]

    )
    username = StringField(
        'Username',
        validators=[DataRequired(), Length(min=1, max=20)]
    )




