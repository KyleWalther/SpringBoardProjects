"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """
    def __init__(self, start):
        """make a generator, starting at start"""
        self.start = start
        self.current = start

    def generate(self):
        """generate the serial number and everytime its called again, add 1 to it"""
        serialNumber = self.current
        self.current += 1
        return serialNumber
    
    def reset(self):
        """rest the serial code back tot he original start value"""
        self.current = self.start

