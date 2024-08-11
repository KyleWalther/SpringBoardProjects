from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()



def connect_db(app):
    db.app = app
    db.init_app(app)



class Kyle(db.model):
    """making a main table of me"""

    __tablename__ = "Kyle"

    id = db.Column(db.Text, primary_key=True)
    friend = db.Column(db.Text, primary_key=True)
    hobby = db.Column(db.Text, primary_key=True)



class Friends(db.model):


















