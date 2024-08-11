from models import Sport, Sponsor, db
from app import app

# Use the connect_db function from models.py
db.app = app
db.init_app(app)

with app.app_context():
    db.drop_all()
    db.create_all()

    # Adding initial data
    d1 = Sport(name='soccer', popularity=20)
    db.session.add(d1)

    d2 = Sponsor(name='nike')
    db.session.add(d2)

    db.session.commit()
