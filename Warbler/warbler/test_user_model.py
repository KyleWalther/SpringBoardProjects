"""User model tests."""

# run these tests like:
#
#    python -m unittest test_user_model.py


import os
from unittest import TestCase

from models import db, User, Message, Follows

# BEFORE we import our app, let's set an environmental variable
# to use a different database for tests (we need to do this
# before we import our app, since that will have already
# connected to the database

os.environ['DATABASE_URL'] = "postgresql:///warbler-test"


# Now we can import app

from app import app

# Create our tables (we do this here, so we only create the tables
# once for all tests --- in each test, we'll delete the data
# and create fresh new clean test data

db.create_all()


class UserModelTestCase(TestCase):
    """Test views for messages."""

    def setUp(self):
        """Create test client, add sample data."""

        User.query.delete()
        Message.query.delete()
        Follows.query.delete()

        self.client = app.test_client()

        """creating to instances of oour user model to test with and add them to the session"""
        self.user1 = User.signup("user1", "user1@test.com", "password", None, None, None, None)
        self.user2 = User.signup("user2", "user2@test.com", "password", None, None, None, None)
        db.session.commit()


    def tearDown(self):
        """Clean up fouled transactions."""
        db.session.rollback()


    def test_user_model(self):
        """Does basic model work?"""

        u = User(
            email="test@test.com",
            username="testuser",
            password="HASHED_PASSWORD"
        )

        db.session.add(u)
        db.session.commit()

        # User should have no messages & no followers
        self.assertEqual(len(u.messages), 0)
        self.assertEqual(len(u.followers), 0)

    def test_repr(self):
        """does the repr method work as intended"""
        """it should return a string that includes the id, username, and email."""
        self.assertEqual(repr(self.user1), f"<User #{self.user1.id}: {self.user1.username}, {self.user1.email}>")


    def test_is_following(self):
        """the is following method should check if one user is following another"""
        self.user1.following.append(self.user2)
        """adds user2 to the list of users that user1 is following"""
        db.session.commit()
        """the is_following method of user1 is called with user2 as an argument, the method itself checks if user2 is in user1's following list, and if so, returns True"""
        self.assertTrue(self.user1.is_following(self.user2))
        self.assertFalse(self.user2.is_following(self.user1))

        
    def is_followed_by(self):
        self.user1.following.append(self.user2)
        db.session.commit()

        self.assertTrue(self.user1.is_followed_by(self.user2))
        self.assertFalse(self.user1.is_followed_by(self.user2))


    def test_user_signup(self):
        """Does the user signup successfully create a new user"""
    
         # Create a new user with all required fields
        u = User.signup(
            username="newuser", 
            email="newuser@test.com", 
            password="password", 
            image_url=None, 
            header_image_url=None, 
            bio="", 
            location=""
        )
    
        # Commit the user to the database
        db.session.commit()
    
        # Check that the user was created correctly
        self.assertIsNotNone(u)
        self.assertEqual(u.username, "newuser")
        self.assertEqual(u.email, "newuser@test.com")
        self.assertTrue(u.password.startswith("$2b$"))


    def test_user_signup_fail(self):
        """Does User.signup fail to create a new user if validations fail?"""
        invalid_user = User.signup(None, "invalidemail", "password", None, None, None, None)
        with self.assertRaises(Exception):
            db.session.commit()

    def test_user_auth(self):
        """Does the authentication successfully return a user when given a valid username and password"""

        u = User.authenticate("user1", "password")
        self.assertIsNotNone(u)
        self.assertEqual(u.username, "user1")

    def test_auth_fail_by_username(self):
        """does the auth fail due to invalid username"""
        self.assertFalse(User.authenticate('invalidusername','password'))
        
    def test_user_authenticate_invalid_password(self):
        """Does User.authenticate fail to return a user when the password is invalid?"""
        self.assertFalse(User.authenticate("user1", "invalidpassword"))

    









