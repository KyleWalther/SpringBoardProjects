from flask_sqlalchemy import SQLAlchemy
"""Models for Blogly."""


db = SQLAlchemy()
# this is executing sqla alchemy

def connect_db(app):
    db.app = app
    db.init_app(app)


# models section

# Models section
class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    first_name = db.Column(db.String(15), nullable=False)
    last_name = db.Column(db.String(15), nullable=False)
    image_url = db.Column(db.String(2000), nullable=True, default='https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg')

    def __repr__(self):
        return f'<User {self.first_name} {self.last_name}>'
    
    def greet(self):
        return f"Hi, I am {self.first_name} and my last name is {self.last_name}"






