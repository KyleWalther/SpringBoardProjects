def same_frequency(num1, num2):
    """Do these nums have same frequencies of digits?
    
        >>> same_frequency(551122, 221515)
        True
        
        >>> same_frequency(321142, 3212215)
        False
        
        >>> same_frequency(1212, 2211)
        True
    """
    number_group1 = str(num1)
    number_group2 = str(num2)

    frequency1 = {digit: number_group1.count(digit) for digit in number_group1}
    frequency2 = {digit: number_group2.count(digit) for digit in number_group2}

    return frequency1 == frequency2