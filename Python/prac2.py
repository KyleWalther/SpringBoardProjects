nums=[1,2,3,4,5,6,7,8,9]

for nums in range(5):
    print(nums)

list(range(10))

list(range(1,10,2))

def greet(person):
    return f"Hello there, {person}"

def divide (a,b):
    if type(a) is int and type(b) is int:
        return a/b
    return 'a nad b must be integers'


def three_things (one,two,three):
    print('hi')


def send_email(to_email, from_email, subject, body):
    email = f"""
      to: {to_email}
      from: {from_email}
      subject: {subject}
      ------------------
      body: {body}
    """
    print(email)



send_email(subject='MEWO', to_email="thisguy@ymail.com", from_email='kyleiscool@ymail.com', body="this is the body you silly")


def power(num, power=2):
    return num ** power

def add_limited_numbers(a,b):
    """ Add two numbers, making sure sum caps at 100"""

    sum= a+b

    if sum > 100:
        sum = 100
    return sum


ages = {"Whiskey": 6, "Fluffy": 3, "Ezra": 7}

for name in ages.keys():
    print(name)

for age in ages.values():
    print(age)

for name_and_age in ages.items():
    print(name_and_age)
