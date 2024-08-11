function square(x){
    return x*x
}

function cube(x){
    return x * x * x
}

describe("getCartTotal", function () {
  test("get total w/o discount", function () {
    const cart = [
      { item: "le croix", price: 4.99, 
      qty: 3 },
      
      { item: "pretzels", price: 8.99, 
      qty: 10 },
    ];

    const total = getCartTotal(cart);
    expect(total).toBe(104.87);
  });

  test("gets total w/discount", function () {
    const cart = [
      { item: "le croix", price: 4.99, 
      qty: 3 },
      { item: "pretzels", price: 8.99, 
      qty: 10 },
    ];

    const total = getCartTotal(cart, 0.5);
    expect(total).toBe(52.44);
  });
});



module.exports= {square: square,
                 cube: cube   
}












