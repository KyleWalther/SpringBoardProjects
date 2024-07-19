"""Message View tests."""

# run these tests like:
#
#    FLASK_ENV=production python -m unittest test_message_views.py


import os
from unittest import TestCase

from models import db, connect_db, Message, User

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


class MessageViewTestCase(TestCase):
    """Test views for messages."""

    def setUp(self):
        """Create test client, add sample data."""

        User.query.delete()
        Message.query.delete()

        self.client = app.test_client()

        self.testuser = User.signup(username="testuser",
                                    email="test@test.com",
                                    password="testuser",
                                    image_url=None,
                                    header_image_url=None,
                                    bio="test bio",
                                    location="test location")

        self.otheruser = User.signup(username="otheruser",
                                     email="other@test.com",
                                     password="password",
                                     image_url=None,
                                     header_image_url=None,
                                     bio="other bio",
                                     location="other location")

        db.session.commit()

        self.testuser_id = self.testuser.id
        self.otheruser_id = self.otheruser.id

    def test_add_message(self):
        """Can use add a message?"""

        # Since we need to change the session to mimic logging in,
        # we need to use the changing-session trick:

        with self.client as c:
            with c.session_transaction() as sess:
                sess[CURR_USER_KEY] = self.testuser.id

            # Now, that session setting is saved, so we can have
            # the rest of ours test

            resp = c.post("/messages/new", data={"text": "Hello"})

            # Make sure it redirects
            self.assertEqual(resp.status_code, 302)

            msg = Message.query.one()
            self.assertEqual(msg.text, "Hello")


    def test_view_following_logged_in(self):
            """Can a logged-in user view the following page of another user?"""
            with self.client as c:
                with c.session_transaction() as sess:
                    sess[CURR_USER_KEY] = self.testuser_id

                resp = c.get(f"/users/{self.otheruser_id}/following")
                self.assertEqual(resp.status_code, 200)

    def test_view_following_logged_out(self):
            """Is a logged-out user prohibited from viewing the following page of another user?"""
            with self.client as c:
                resp = c.get(f"/users/{self.otheruser_id}/following", follow_redirects=True)
                self.assertEqual(resp.status_code, 200)
                self.assertIn(b"Access unauthorized", resp.data)

    def test_view_followers_logged_in(self):
            """Can a logged-in user view the followers page of another user?"""
            with self.client as c:
                with c.session_transaction() as sess:
                    sess[CURR_USER_KEY] = self.testuser_id

                resp = c.get(f"/users/{self.otheruser_id}/followers")
                self.assertEqual(resp.status_code, 200)

    def test_view_followers_logged_out(self):
            """Is a logged-out user prohibited from viewing the followers page of another user?"""
            with self.client as c:
                resp = c.get(f"/users/{self.otheruser_id}/followers", follow_redirects=True)
                self.assertEqual(resp.status_code, 200)
                self.assertIn(b"Access unauthorized", resp.data)

    if __name__ == "__main__":
        import unittest
        unittest.main()