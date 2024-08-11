from unittest import TestCase
from app import app, db, User

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly_test'
app.config['SQLALCHEMY_ECHO'] = False

db.drop_all()
db.create_all()

class RoutesTestCase(TestCase):
    def setUp(self):
        """Clean up any existing users."""
        User.query.delete()

    def tearDown(self):
        """Clean up any fouled transaction."""
        db.session.rollback()

    def test_greet(self):
        """Test the greet method of User model."""
        pet = User(first_name="Test", last_name="testt")
        self.assertEqual(pet.greet(), "Hi, I am Test and my last name is testt")

    def test_home_page(self):
        """Test if home page returns status code 200"""
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)


    def test_add_user_page(self):
        """Test if add user page returns status code 200"""
        response = self.client.get('/add')
        self.assertEqual(response.status_code, 200)

    def test_add_user(self):
        """Test adding a new user"""
        data = {'first_name': 'John', 'last_name': 'Doe'}
        response = self.client.post('/add', data=data, follow_redirects=True)
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'John Doe', response.data)

    def test_user_detail_page(self):
        """Test if user detail page returns status code 200"""
        # Assuming there's a user with id=1 in the database
        response = self.client.get('/user/1')
        self.assertEqual(response.status_code, 200)