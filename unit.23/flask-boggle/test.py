from unittest import TestCase
from app import app
from flask import session, json
from boggle import Boggle


class FlaskTests(TestCase):

    # TODO -- write tests for every view function / feature!
    def setUp(self):
        app.testing = True
        self.app = app.test_client()
        
    def test_submit_form_valid_word(self):
        # Submit a valid word
        response = self.app.post('/submit-form', json={'data': 'example'})
        data = json.loads(response.data)
        
        self.assertEqual(response.status_code, 200)
        self.assertEqual(data['result'], 'ok')
        self.assertIn('word_length', data)
        self.assertIn('total_score', data)

    def test_submit_form_invalid_word(self):
        # Submit an invalid word
        response = self.app.post('/submit-form', json={'data': 'xyz'})
        data = json.loads(response.data)
        
        self.assertEqual(response.status_code, 200)
        self.assertEqual(data['result'], 'not-word')
        self.assertIn('total_score', data)

    def test_submit_form_already_submitted_word(self):
        # Submit a word that has already been submitted
        response1 = self.app.post('/submit-form', json={'data': 'example'})
        response2 = self.app.post('/submit-form', json={'data': 'example'})
        
        data1 = json.loads(response1.data)
        data2 = json.loads(response2.data)
        
        self.assertEqual(response1.status_code, 200)
        self.assertEqual(response2.status_code, 200)
        self.assertEqual(data1['result'], 'ok')
        self.assertEqual(data2['result'], 'already-submitted')
        self.assertIn('total_score', data2)