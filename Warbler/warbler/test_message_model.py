import os
from unittest import TestCase

from models import db, User, Message, Follows
from datetime import datetime

from app import app

os.environ['DATABASE_URL'] = "postgresql:///warbler-test"

db.create_all()


class MeddageModelTestCase(TestCase):

    def setUp(self):
        """create tedt client and sample data"""
        User.query.delete()
        Message.query.delete()

        #create test client
        self.client = app.test_client()

        # adding a smaple user
        self.user = User.signup(
            username="testuser",
            email="testuser@test.com",
            password="password",
            image_url=None,
            header_image_url=None,
            bio="Test bio",
            location="Test location"
        )

        db.session.commit()

        #adding example message
        self.message = Message(
            text='Text Message',
            user_id=self.user.id,
            timestamp=datetime.utcnow()
        )
        db.session.add(self.message)
        db.session.commit()


    def tearDown(self):
        """Clean up any fouled transaction."""
        db.session.rollback()



    def test_message_model(self):
        """Does basic model work?"""
        m = Message(
            text="Another test message",
            user_id=self.user.id,
            timestamp=datetime.utcnow()
        )
        db.session.add(m)
        db.session.commit()

        self.assertEqual(m.text, "Another test message")
        self.assertEqual(m.user_id, self.user.id)
        self.assertEqual(m.user.username, "testuser")


    def test_message_user_relationship(self):
        """Test the relationship between message and user."""
        m = Message.query.get(self.message.id)
        self.assertEqual(m.user.username, self.user.username)

    def test_message_deletion(self):
        """Test message deletion."""
        m = Message(
            text="Message to delete",
            user_id=self.user.id,
            timestamp=datetime.utcnow()
        )
        db.session.add(m)
        db.session.commit()

        message_id = m.id
        db.session.delete(m)
        db.session.commit()

        m = Message.query.get(message_id)
        self.assertIsNone(m)


