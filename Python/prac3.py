names = ['kyle','jordan','emily']

vegan_no_nos = ['eggs', 'meat','milk','fish','figs']

pie_ingrediants = ['four','apples','sugar','eggs','salt']

for food in pie_ingrediants:
    if food in vegan_no_nos:
        print(f'cant eat that {food}')
    else:
        print(f'cool i can eat this {food}')

zlist = [1,2,3,4]
xlist = zlist
xlist[0] = 9


steplist = [1,2,3,4,5,6]
steplist[2:4:1]
[3, 4]

nums = list(range(0,100,1))
nums[75:100:5]
[75, 80, 85, 90, 95]

nums[90:]

nums[90::2]

nums[:10:]

nums[20:10:-1]

colors=['red','orange','yellow']

colors[0:1] = ['dark red', 'pink']
['dark red', 'pink', 'orange', 'yellow']

colors[3:] =[]

colors[0:1] = []






msg = "weffiefejfg"
