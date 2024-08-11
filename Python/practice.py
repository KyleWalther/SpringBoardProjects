age = 19
isBirthday = True


if age >= 21:
    print('you can drink')
    if isBirthday:
        print('HAPPY BIRTHDAY')
elif age >= 18:
    print('you cant drink but you can come hang')
    if isBirthday:
        print('HAPPY BIRTHDAY, no liquor still')
else:
    print('Get ut of here')
color = 'teal'
print('cool') if color == 'teal' else print('wrong color')

if age < 10 or age>= 44:
    print('your ticket is $10')
else:
    print('your ticket is $20')

num = 0

while num <=100:
    if num == 50:
        break
    print(num)
    num = num+10
print('all done')


# target = 37
# guess = None

# while guess != target:
#     guess = input('Please guess a number...')
#     if guess == 'q' or guess == 'quit':
#         break
#     guess = int(guess)
# print('you got it')




colors = ['red','blue','yellow','green']
for color in colors:
    print(color)

for char in "ABCDEFGHIJKLMNOPQRSTUVWXYZ":
    print(char)

for num in "kkkkkk":
    print('hello')

for n in range(10):
    print(n)
