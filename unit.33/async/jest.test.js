const {square, cube} = require('./jest')



describe('Square function', function() {
    test('should square a number', function(){
        const res = square(3)
        expect(res).toEqual(9)
    })
    
    
    test('should square a negative numbers', function(){
        const res = square(-9)
        expect(res).toEqual(81)
    })
}
)


describe('Cube function', function() {
    test('should cube a number', function(){
        const res = cube(1)
        expect(res).toEqual(1)
        const res2 = cube(2)
        expect(res2).toEqual(8)
    })
}
)








describe("getCartTotal", function () {

    let cart;
    beforeEach(function(){
        const cart = [
            { item: "le croix", price: 4.99, qty: 3 },
            { item: "pretzels", price: 8.99, qty: 10 },
          ];
    })

    afterEach(function(){
        console.log('after each')
    })

    beforeAll(function(){
        console.log('Before ALLL')
    })

    afterAll(function(){
        console.log('after ALLL')
    })
    

    test("get total w/o discount", function () {
      const total = getCartTotal(cart);
      expect(total).toBe(104.87);
    });
  
    test("gets total w/discount", function () {
      const total = getCartTotal(cart, 0.5);
      expect(total).toBe(52.44);
    });
  });









