import app2
from unittest import TestCase

class theTests(TestCase):
    """Example of unit tests"""

    def test_adder(self):
        assert app2.adder(2,3) == 5

    def test_adder_2(self):
        # instead of asserting app2.adder
        self.assertEqual(app2.adder(2,2), 4)
        self.assertEqual(app2.adder(2,4), 6)

    def test_reverse_str(self):
        # the string entered should be returned in reverse 
        self.assertEqual(app2.reverse_str('dog'), 'god')

    def test_is_palindrome(self):
        #should return 
        self.assertTrue(app2.is_Palindrome('stuts'))
        self.assertFalse(app2.is_Palindrome('stools'))
        self.assertTrue(app2.is_Palindrome('Toot'))



    def test_factorial(self):
        self.assertEqual(app2.factorial(5), 120)
        self.assertRaises(ValueError, app2.factorial, -5)
        #this is an example to rasie an error thats already coded in the function. it needs to be formatted this way in order to have it continue run the rest of the tests. if no error is shown within python after running the tests, that shows you that the rasie error woul dhave shwon up as intended.






