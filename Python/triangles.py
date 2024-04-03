from forex_python import bitcoin



# file = open('practice.py', 'r')

# for line in file:
#     print(line)
# file.close()


import math

file = open('demo.txt', 'a')

file.write('i am line 2')
file.close()

class Triangle:
    """
    A class used to represent a right triangle

    ATTRIBUTES:
    a:int
    length of side a
    b:int
    length of side b
    """

    def __init__(self, a, b):
        "create triangle from a and b sides"
        self.a = a
        self.b = b
        """this should return a string representation of values a and b"""
    def __repr__(self):
        return F"Triangle(a={self.a}, b={self.b})"
    
    def __str__(self):
        """return a string for the user to read representing """
        return self.describe()
    
    def __eq__(self, other):
        return self.a == other.a and self.b == other.b



    @classmethod
    def random(cls):
        print(cls)

    def get_hypotenuse(self):
        "get hypotenouse (lenght of 3rd side)"
        return math.sqrt(self.a ** 2 + self.b ** 2)
    
    def get_area(self):
        "get area of triangle"
        return (self.a *self.b) / 2
    
    def describe(self):
        return f"I am a triangle with sides: {self.a} & {self.b}"
















