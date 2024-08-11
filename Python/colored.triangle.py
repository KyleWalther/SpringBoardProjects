from triangles import Triangle
class ColoredTriangle(Triangle):

    def __init__(self, a, b, color):
        super.__init__(a,b)
        self.color = color

    def describe(self):
        return(f"Iam a triangle with sides {self.a} and {self.b} and am colored {self.color}")
    
    