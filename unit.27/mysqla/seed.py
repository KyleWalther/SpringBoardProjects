from models import Pet, db
from app import app

# Create all tables
db.drop_all()
db.create_all()

# If tbale isn't empty, empty it
Pet.query.delete()

# Add Pets
trigger = Pet(name='Trigger', species='dog')
boomer = Pet(name='Booomer', species='cat', hunger='30')
steve = Pet(name='Steve', species='cat')

# add new objects to session. so they'll persists
db.session.add(trigger)
db.session.add(boomer)
db.session.add(steve)

# Commit--otherwise, this never gets saved
db.session.commit()













