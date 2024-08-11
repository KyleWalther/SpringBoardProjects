def product(a, b):
    """Return product of a and b.

        >>> product(2, 2)
        4

        >>> product(2, -2)
        -4
    """
    return a+b

def weekday_name(day_of_week):
    """Return name of weekday.
    
        >>> weekday_name(1)
        'Sunday'
        
        >>> weekday_name(7)
        'Saturday'
        
    For days not between 1 and 7, return None
    
        >>> weekday_name(9)
        >>> weekday_name(0)
    """
    weekdays = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
    if day_of_week < 1 or day_of_week > 7:
        return None
    
    return weekdays[day_of_week - 1]

def last_element(lst):
    """Return last item in list (None if list is empty.
    
        >>> last_element([1, 2, 3])
        3
        
        >>> last_element([]) is None
        True
    """
    if len(lst) == 0:
        return None
    
    return lst[-1]

def reverse_string(phrase):
    """Reverse string,

        >>> reverse_string('awesome')
        'emosewa'

        >>> reverse_string('sauce')
        'ecuas'
    """
    reversed_phrase = phrase[::-1]
    return reversed_phrase
    

def single_letter_count(word, letter):
    """How many times does letter appear in word (case-insensitively)?
    
        >>> single_letter_count('Hello World', 'h')
        1
        
        >>> single_letter_count('Hello World', 'z')
        0
        
        >>> single_letter_count("Hello World", 'l')
        3
    """
    return word.count(letter)



def multiple_letter_count(phrase):
    """Return dict of {ltr: frequency} from phrase.

        >>> multiple_letter_count('yay')
        {'y': 2, 'a': 1}

        >>> multiple_letter_count('Yay')
        {'Y': 1, 'a': 1, 'y': 1}
    """
    letter_count = {}

    for char in phrase:
        if char in letter_count:
            letter_count[char] += 1
        else:
            letter_count[char] = 1

    return letter_count



def is_palindrome(phrase):
    """Is phrase a palindrome?

    Return True/False if phrase is a palindrome (same read backwards and
    forwards).

        >>> is_palindrome('tacocat')
        True

        >>> is_palindrome('noon')
        True

        >>> is_palindrome('robert')
        False

    Should ignore capitalization/spaces when deciding:

        >>> is_palindrome('taco cat')
        True

        >>> is_palindrome('Noon')
        True
    """
    revphrase = phrase[::-1]
    if phrase == revphrase:
        return True
    else:
        return False


def frequency(lst, search_term):
    """Return frequency of term in lst.
    
        >>> frequency([1, 4, 3, 4, 4], 4)
        3
        
        >>> frequency([1, 4, 3], 7)
        0
    """
    answ = 0
    for word in lst:
        if word == search_term:
           answ += 1
    return answ

def flip_case(phrase, to_swap):
    """Flip [to_swap] case each time it appears in phrase.

        >>> flip_case('Aaaahhh', 'a')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'A')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'h')
        'AaaaHHH'

    """
    result = ""
    for char in phrase:
        if char.lower() == to_swap.lower():
            result += char.swapcase()
        else:
            result += char
    return result


def multiply_even_numbers(nums):
    """Multiply the even numbers.
    
        >>> multiply_even_numbers([2, 3, 4, 5, 6])
        48
        
        >>> multiply_even_numbers([3, 4, 5])
        4
        
    If there are no even numbers, return 1.
    
        >>> multiply_even_numbers([1, 3, 5])
        1
    """
    product = 1
    for num in nums:
        if (num % 2) == 0:
           product *= num
    return product if product != 1 else 1


def capitalize(phrase):
    """Capitalize first letter of first word of phrase.

        >>> capitalize('python')
        'Python'

        >>> capitalize('only first word')
        'Only first word'
    """
    return phrase.capitalize()


def compact(lst):
    """Return a copy of lst with non-true elements removed.

        >>> compact([0, 1, 2, '', [], False, (), None, 'All done'])
        [1, 2, 'All done']
    """
    return [item for item in lst if item]


def intersection(l1, l2):
    """Return intersection of two lists as a new list::
    
        >>> intersection([1, 2, 3], [2, 3, 4])
        [2, 3]
        
        >>> intersection([1, 2, 3], [1, 2, 3, 4])
        [1, 2, 3]
        
        >>> intersection([1, 2, 3], [3, 4])
        [3]
        
        >>> intersection([1, 2, 3], [4, 5, 6])
        []
    """
    return list(set(l1) & set(l2))



colors = ('red','yellow','green')



smokehouse = {'name':'Ricki','gender':'male','age':'26','height':"6'5",'skills': {
    'strength':  '20',
    'brains': '30',
    'speed':'43',
    'agility': '11'
}}

# smokehouse.items()
# dict_items([('name', 'Ricki'), ('gender', 'male'), ('age', '26'), ('height', "6'5"), ('skills', {'strength': '20', 'brains': '30', 'speed': '43', 'agility': '11'})])


nums = [1,2,3,4,5,6,7,8,9,10,11,12,13]
evens = []
for num in nums:
    if num % 2 == 0:
        evens.append(num)
print(evens)

evens = [num for num in nums if num % 2 ==0]


numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13]
[number * 2 for number in numbers]
#  for each number in the numbers list, multiply it by 2

# [what_to_append for thing in list]

[n * n for n in [2,4,6,8]]

[cha.upper() + '.' for cha in 'lmfao']

[num for num in range(10,20)]
[10, 11, 12, 13, 14, 15, 16, 17, 18, 19]



[[0 for y in range(3)]for x in range(3)]
[[0, 0, 0], [0, 0, 0], [0, 0, 0]]




def gen_board(size, intial_value=None):
    return [[intial_value for x in range(size)] for y in range(size)]

gen_board(3,'ROW')
[['ROW', 'ROW', 'ROW'], ['ROW', 'ROW', 'ROW'], ['ROW', 'ROW', 'ROW']]

[x for x in range(10) if x % 2 == 0]
[0, 2, 4, 6, 8]

chickens = [
    {'name': 'Henry', "sex": 'rooster'},
    {'name': 'Kyle', "sex": 'rooster'},
    {'name': 'Steve', "sex": 'rooster'},
    {'name': 'Mike', "sex": 'Chicken'},
    {'name': 'Luke', "sex": 'rooster'},
    {'name': 'CharChar', "sex": 'Chicken'},
    {'name': 'Ben', "sex": 'Chicken'},
]

hens = [bird['name'] for bird in chickens if bird['sex'] == 'Chicken']

hens
['Mike', 'CharChar', 'Ben']


scores = [55, 80 ,40, 75, 92, 33]
passes = ['Pass' for score in scores if score >= 70]
passes = ['Pass' if score >= 70 else 'Fail' for score in scores]


{day:0 for day in 'MTRWFRSU'}
{'M': 0, 'T': 0, 'R': 0, 'W': 0, 'F': 0, 'S': 0, 'U': 0}

{num: num * num for num in range(1,10)}
{1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81}


{num: num * num for num in range(1,10)if num % 2 == 0}
{2: 4, 4: 16, 6: 36, 8: 64}

{char for char in 'abracadabra'}
{'a', 'b', 'c', 'd', 'r'}


{char for char in 'hello old darkness my old friend' if char not in 'aeiou'}
{' ', 'd', 'f', 'h', 'k', 'l', 'm', 'n', 'r', 's', 'y'}


def mode(nums):
    """Return most-common number in list.

    For this function, there will always be a single-most-common value;
    you do not need to worry about handling cases where more than one item
    occurs the same number of times.

        >>> mode([1, 2, 1])
        1

        >>> mode([2, 2, 3, 3, 2])
        2
    """
    mode_num = {}
    for num in nums:
        if num in mode_num:
            mode_num[num] += 1
        else:
            mode_num[num] = 1
    mode_num_max = max(mode_num, key=mode_num.get)

    return mode_num_max


def triple_and_filter(nums):
    """Return new list of tripled nums for those nums divisible by 4.

    Return every number in list that is divisible by 4 in a new list,
    except multipled by 3.
    
        >>> triple_and_filter([1, 2, 3, 4])
        [12]
        
        >>> triple_and_filter([6, 8, 10, 12])
        [24, 36]
        
        >>> triple_and_filter([1, 2])
        []
    """
    return [num * 3 for num in nums if num % 4 == 0]


def sum_pairs(nums, goal):
    """Return tuple of first pair of nums that sum to goal.

    For example:

        >>> sum_pairs([1, 2, 2, 10], 4)
        (2, 2)

    (4, 2) sum to 6, and come before (5, 1):

        >>> sum_pairs([4, 2, 10, 5, 1], 6) # (4, 2)
        (4, 2)

    (4, 3) sum to 7, and finish before (5, 2):

        >>> sum_pairs([5, 1, 4, 8, 3, 2], 7)
        (4, 3)

    No pairs sum to 100, so return empty tuple:

        >>> sum_pairs([11, 20, 4, 2, 1, 5], 100)
        ()
    """
    seen = set()
    for num in nums:
        complement = goal - num
        if complement in seen:
            return (complement, num)
        seen.add(num)
    return ()

def vowel_count(phrase):
    """Return frequency map of vowels, case-insensitive.

        >>> vowel_count('rithm school')
        {'i': 1, 'o': 2}
        
        >>> vowel_count('HOW ARE YOU? i am great!') 
        {'o': 2, 'a': 3, 'e': 2, 'u': 1, 'i': 1}
    """
    vowels = 'aeiou'
    return {char: phrase.lower().count(char) for char in phrase.lower() if char in vowels}

def titleize(phrase):
    """Return phrase in title case (each word capitalized).

        >>> titleize('this is awesome')
        'This Is Awesome'

        >>> titleize('oNLy cAPITALIZe fIRSt')
        'Only Capitalize First'
    """
    words = phrase.split()
    cap_words = [word.capitalize() for word in words]
    return ' '.join(cap_words)



def includes(collection, sought, start=None):
    """Is sought in collection, starting at index start?

    Return True/False if sought is in the given collection:
    - lists/strings/sets/tuples: returns True/False if sought present
    - dictionaries: return True/False if *value* of sought in dictionary

    If string/list/tuple and `start` is provided, starts searching only at that
    index. This `start` is ignored for sets/dictionaries, since they aren't
    ordered.

        >>> includes([1, 2, 3], 1)
        True

        >>> includes([1, 2, 3], 1, 2)
        False

        >>> includes("hello", "o")
        True

        >>> includes(('Elmo', 5, 'red'), 'red', 1)
        True

        >>> includes({1, 2, 3}, 1)
        True

        >>> includes({1, 2, 3}, 1, 3)  # "start" ignored for sets!
        True

        >>> includes({"apple": "red", "berry": "blue"}, "blue")
        True
    """
    if isinstance(collection, (list, str, tuple, set)):
        if start is not None and isinstance(collection, (list, str, tuple)):
            return sought in collection[start:]
        else:
            return sought in collection
    # Check if collection is a dictionary
    elif isinstance(collection, dict):
        return sought in collection.values()
    else:
        return False


def repeat(phrase, num):
    """Return phrase, repeated num times.

        >>> repeat('*', 3)
        '***'

        >>> repeat('abc', 2)
        'abcabc'

        >>> repeat('abc', 0)
        ''

    Ignore illegal values of num and return None:

        >>> repeat('abc', -1) is None
        True

        >>> repeat('abc', 'nope') is None
        True
    """
    return phrase * num


def truncate(phrase, n):
    """Return truncated-at-n-chars version of  phrase.
    
    If the phrase is longer than, or the same size as, n make sure it ends with '...' and is no
    longer than n.
    
        >>> truncate("Hello World", 6)
        'Hel...'
        
        >>> truncate("Problem solving is the best!", 10)
        'Problem...'
        
        >>> truncate("Yo", 100)
        'Yo'
        
    The smallest legal value of n is 3; if less, return a message:
    
        >>> truncate('Cool', 1)
        'Truncation must be at least 3 characters.'

        >>> truncate("Woah", 4)
        'W...'

        >>> truncate("Woah", 3)
        '...'
    """
    if n < 3:
        return 'Truncate must be at least 3 characters.'
    
    if len(phrase) <= n:
        return phrase
    
    return phrase[:n - 3] + '...' if n>= 3 else '...'


def two_list_dictionary(keys, values):
    """Given keys and values, make dictionary of those.
    
        >>> two_list_dictionary(['x', 'y', 'z'], [9, 8, 7])
        {'x': 9, 'y': 8, 'z': 7}
        
    If there are fewer values than keys, remaining keys should have value
    of None:
    
        >>> two_list_dictionary(['a', 'b', 'c', 'd'], [1, 2, 3])
        {'a': 1, 'b': 2, 'c': 3, 'd': None}
    
    If there are fewer keys, ignore remaining values:

        >>> two_list_dictionary(['a', 'b', 'c'], [1, 2, 3, 4])
        {'a': 1, 'b': 2, 'c': 3}
   """
    dictionary = {}
    for i in range(len(keys)):
        # Check if the current index is within the range of values
        if i < len(values):
            # If yes, assign the key-value pair
            dictionary[keys[i]] = values[i]
        else:
            # If no, assign the key with None value
            dictionary[keys[i]] = None
    
    return dictionary

def sum_range(nums, start=0, end=None):
    """Return sum of numbers from start...end.

    - start: where to start (if not provided, start at list start)
    - end: where to stop (include this index) (if not provided, go through end)

        >>> nums = [1, 2, 3, 4]

        >>> sum_range(nums)
        10

        >>> sum_range(nums, 1)
        9

        >>> sum_range(nums, end=2)
        6

        >>> sum_range(nums, 1, 3)
        9

    If end is after end of list, just go to end of list:

        >>> sum_range(nums, 1, 99)
        9
    """
    if end is None:
        end = len(nums)

    return sum(nums[start:end])

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

def find_the_duplicate(nums):
    """Find duplicate number in nums.

    Given a list of nums with, at most, one duplicate, return the duplicate.
    If there is no duplicate, return None

        >>> find_the_duplicate([1, 2, 1, 4, 3, 12])
        1

        >>> find_the_duplicate([6, 1, 9, 5, 3, 4, 9])
        9

        >>> find_the_duplicate([2, 1, 3, 4]) is None
        True
    """
    seen = set()
    for num in nums:
        if num in seen:
            return num
        seen.add(num)
    return None




names = ['charlie','lucy']
name1, name2 = names

point = (100,58)
x,y = point

sorted_scores = [2400, 2350, 2100, 1960]
top_score, *scores = sorted_scores

first_name = 'Xander'
initial, *rest = first_name

point = (40,50,60)
x,y,z = point

color_pairs = [['red','green'], ['purple','orange']]
pair1, pair2 = color_pairs

((primary1, secondary1), (primary2, secondary2)) = color_pairs

grades = {
    'A': 12,
    'B': 2,
    'C': 22
}

for (k,v) in grades.items():
    print(k,v)
    




nums = [2,4,6,8]

[-2, 0, *nums]
[-2, 0, *nums]
[-2, 0, 1, 2, 3, 4]

odds = [1,3,5,7]

[*odds, *nums]
[1, 3, 5, 7, 1, 2, 3, 4]

["hello"]
[*"hello"]
['h', 'e', 'l', 'l', 'o']

rainfall = {'jan': 2.5, 'feb':4.9}
{*rainfall}

{**rainfall}



def get_days_alive(person):
    try:
        days = person['age'] * 365
        print(f'{person["name"]} has been alive for {days} days')
    except KeyError as exc:
        print(f'missing key: {exc}')
    except TypeError:
        print('expected person to be a dictionary')
    

        



{'name': 'princesskittty', 'age': 10}


def bounded_avg(nums):
    """return avg of nums ( makes sure the nums are 1-100)
    
    >>> bounded_avg([2,4,6])
    4.0

    >>> ValueError                               
    Traceback (most recent call last)
     ...
    ValueError: Outside bounds of 1-100





    """

    for n in nums:
        if n < 1 or n > 100:
            raise ValueError('Outside bounds of 1-100')
        
    return sum(nums) / len(nums)

def handle_data():
    """Processes data from a datbase"""

    ages = [10,40,50,99,103,2,0]

    try:
        avg = bounded_avg(ages)
        print('Average was', avg)

    except ValueError as exc:
        print('Invalid age in list of ages')


from prac2 import power























