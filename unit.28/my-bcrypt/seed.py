from models import db, User, Feedback
from app import app

# Create all tables
db.drop_all()
db.create_all()

# If table isn't empty, empty it
User.query.delete()
Feedback.query.delete()

# Add users
user1 = User.register(username="user1", password="password", email="user1@example.com", first_name="User", last_name="One")
user2 = User.register(username="user2", password="password", email="user2@example.com", first_name="User", last_name="Two")

db.session.add_all([user1, user2])
db.session.commit()

# Add feedback
feedback1 = Feedback(title="Feedback 1", content="This is feedback 1 from user1.", user_id=user1.id)
feedback2 = Feedback(title="Feedback 2", content="This is feedback 2 from user1.", user_id=user1.id)
feedback3 = Feedback(title="Feedback 3", content="This is feedback 3 from user2.", user_id=user2.id)

db.session.add_all([feedback1, feedback2, feedback3])
db.session.commit()

print("Seeding complete.")
