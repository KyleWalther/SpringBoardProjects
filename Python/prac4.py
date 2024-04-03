person = {'First':'Henry', 'age':'22', 'Gender':'Male'}

'First' in person

person['First']

person['First'] = 'Kyle'

dict([[True,0],[False,1]])
{True: 0, False: 1}


smokehouse = {'name':'Ricki','gender':'male','age':'26','height':"6'5",'skills': {
    'strength':  '20',
    'brains': '30',
    'speed':'43',
    'agility': '11'
}}

 

for key in smokehouse.keys():
    print(key)

for value in smokehouse.values():
    print(value)

for pair in smokehouse.items():
    print(pair)


Keys = list(smokehouse.keys())
['name', 'gender', 'age', 'height', 'skills']

Keys.sort()


languages = {'ruby', 'python', 'HTML'}

voted_langauges = ['ruby','pyhton','javascript','python','html','css','rubyS']
set(voted_langauges)


lemon = {'sour', 'yellow', 'fruit', 'bumpy'}
banana = {'fruit','smooth','sweet','yellow'}

lemon | banana

lemon ^  banana
{'bumpy', 'smooth', 'sour', 'sweet'}

for words in lemon:
    print(words)


