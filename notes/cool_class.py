class Cool:
    def __init__(self, name_value, party_value, smart_value, funny_value, fast_value):
        self.name = (name_value)
        self.party = int(party_value)
        self.smart = int(smart_value)
        self.funny = int(funny_value)
        self.fast = int(fast_value)

    def cool_value(self):
        total_value = self.party + self.smart + self.funny + self.fast
        return total_value
    
    def compare_value(self, other_name):
        if self.cool_value() > other_name.cool_value():
            return f"{self.name} is cooler"
        elif self.cool_value() < other_name.cool_value():
            return other_name
        else:
            return "Both cool values are the same"





Kyle = Cool(name_value="Kyle", party_value='10', smart_value='10', funny_value='10', fast_value='10')

Shawn = Cool('Shawn', '10','6','8','6')



