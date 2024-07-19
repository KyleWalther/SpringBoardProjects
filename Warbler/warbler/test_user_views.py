"""Message View tests."""

# run these tests like:
#
#    FLASK_ENV=production python -m unittest test_message_views.py


import os
from unittest import TestCase

from models import db, connect_db, Message, User, Follows

# BEFORE we import our app, let's set an environmental variable
# to use a different database for tests (we need to do this
# before we import our app, since that will have already
# connected to the database

os.environ['DATABASE_URL'] = "postgresql:///warbler-test"


# Now we can import app

from app import app, CURR_USER_KEY

# Create our tables (we do this here, so we only create the tables
# once for all tests --- in each test, we'll delete the data
# and create fresh new clean test data

db.create_all()

# Don't have WTForms use CSRF at all, since it's a pain to test

app.config['WTF_CSRF_ENABLED'] = False




class UserModelTestCase(TestCase):
    """Test views for messages."""

    def setUp(self):
        """Create test client, add sample data."""

        # Clean up any existing data
        User.query.delete()
        Message.query.delete()
        Follows.query.delete()

        # Create test users
        self.user1 = User.signup(username="user1",
                                 email="user1@test.com", password="password",
                                 image_url=None, header_image_url=None, bio=None, location=None)
        self.user2 = User.signup(username="user2",
                                 email="user2@test.com", password="password",
                                 image_url=None, header_image_url=None, bio=None, location=None)
        db.session.commit()

        self.user1_id = self.user1.id
        self.user2_id = self.user2.id

        self.client = app.test_client()

    def test_follower_following_pages_logged_in(self):
        """Test if logged in users can see follower/following pages."""
        with self.client as c:
            with c.session_transaction() as sess:
                sess[CURR_USER_KEY] = self.user1_id

            # Access following page
            resp = c.get(f"/users/{self.user2_id}/following")
            self.assertEqual(resp.status_code, 200)

            # Access followers page
            resp = c.get(f"/users/{self.user2_id}/followers")
            self.assertEqual(resp.status_code, 200)

    def test_follower_following_pages_logged_out(self):
        """Test if logged out users are disallowed from seeing follower/following pages."""
        with self.client as c:
            # Access following page
            resp = c.get(f"/users/{self.user2_id}/following", follow_redirects=True)
            self.assertIn(b'Access unauthorized.', resp.data)

            # Access followers page
            resp = c.get(f"/users/{self.user2_id}/followers", follow_redirects=True)
            self.assertIn(b'Access unauthorized.', resp.data)

    def test_add_message_logged_in(self):
        """Test if logged in user can add a message."""
        with self.client as c:
            with c.session_transaction() as sess:
                sess[CURR_USER_KEY] = self.user1_id

            resp = c.post("/messages/new", data={"text": "New message"}, follow_redirects=True)
            self.assertIn(b"New message", resp.data)

    def test_delete_message_logged_in(self):
        """Test if logged in user can delete their own message."""
        m = Message(id=123, text="test message", user_id=self.user1_id)
        db.session.add(m)
        db.session.commit()

        with self.client as c:
            with c.session_transaction() as sess:
                sess[CURR_USER_KEY] = self.user1_id

            resp = c.post("/messages/123/delete", follow_redirects=True)
            self.assertNotIn(b"test message", resp.data)

    def test_add_message_logged_out(self):
        """Test if logged out user is prohibited from adding messages."""
        with self.client as c:
            resp = c.post("/messages/new", data={"text": "New message"}, follow_redirects=True)
            self.assertIn(b'Access unauthorized.', resp.data)

    def test_delete_message_logged_out(self):
        """Test if logged out user is prohibited from deleting messages."""
        m = Message(id=123, text="test message", user_id=self.user1_id)
        db.session.add(m)
        db.session.commit()

        with self.client as c:
            resp = c.post("/messages/123/delete", follow_redirects=True)
            self.assertIn(b'Access unauthorized.', resp.data)

    def test_add_message_as_another_user(self):
        """Test if logged in user is prohibited from adding a message as another user."""
        with self.client as c:
            with c.session_transaction() as sess:
                sess[CURR_USER_KEY] = self.user1_id

            # Try to add a message to another user's messages (which shouldn't be allowed)
            resp = c.post("/messages/new", data={"text": "New message", "user_id": self.user2_id}, follow_redirects=True)
            self.assertNotIn(b"New message", resp.data)

    def test_delete_message_as_another_user(self):
        """Test if logged in user is prohibited from deleting another user's message."""
        m = Message(id=123, text="test message", user_id=self.user2_id)
        db.session.add(m)
        db.session.commit()

        with self.client as c:
            with c.session_transaction() as sess:
                sess[CURR_USER_KEY] = self.user1_id

            resp = c.post("/messages/123/delete", follow_redirects=True)
            self.assertIn(b'Access unauthorized.', resp.data)










