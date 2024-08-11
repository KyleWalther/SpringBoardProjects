


def adder(x,y):
    """
    Adds two numbers together.
    >>> adder(2,3)
    5

    >>> adder(2,6)
    8
 
    """

    return x + y






def reverse_str(s):
    """reverses a string"""
    return s[::-1]

def is_Palindrome(s):
    """Boolean method to check whether a given string is a palindrome"""
    rev = reverse_str(s)
    return s.lower() == rev.lower()

def factorial(n):
    """Calculates factorial iteratively"""
    if not (isinstance(n, int) and n >= 0 ):
        raise ValueError("'n' must be non-negative integer.")
    if n == 0:
        return 1
    result = 1
    for i in range(2, n+1):
        result *= i
    return result

# 5 * 4 * 3 * 2 * 1 is an example of a facrorial



