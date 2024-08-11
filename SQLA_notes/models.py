from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import CheckConstraint

db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)

class Sport(db.Model):
    __tablename__ = 'sports'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable=False, unique=True)
    popularity = db.Column(db.Integer, nullable=False)

    __table_args__ = (
        CheckConstraint('popularity >= 0 AND popularity <= 100', name='popularity_range'),
    )

    players = db.relationship('Player', backref='sport', cascade="all, delete-orphan")

class Player(db.Model):
    __tablename__ = 'players'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    sport_id = db.Column(db.Integer, db.ForeignKey('sports.id'), nullable=False)

class Sponsor(db.Model):
    __tablename__ = 'sponsors'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)

















