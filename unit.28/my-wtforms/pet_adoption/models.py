from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def connect_db(app):
    db.app = app
    db.init_app(app)


class Pets(db.Model):
    __tablename__ = "pets"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    pet_name = db.Column(db.Text, nullable=False)
    pet_species = db.Column(db.Text, nullable=False)
    pet_photo = db.Column(db.Text)
    pet_age = db.Column(db.Integer)
    pet_notes = db.Column(db.Text)
    pet_available = db.Column(db.Boolean, default=True)















