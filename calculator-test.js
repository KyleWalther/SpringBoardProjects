
it('should calculate the monthly rate correctly, and show decimal', function () {
  // ..
  const values ={amount:100, years:10, rate:1}
  expect(calculateMonthlyPayment(values)).toEqual('0.88')
});


it("should return a result with string = infinty", function() {
  // ..
  const values ={amount:5000, years:0, rate:10}
  expect(calculateMonthlyPayment(values)).toBeInstanceOf(String)
});

it('should work if the calculated number is less than or equal too 15', function(){
  const values ={amount:1000, years:10, rate:10}
  expect(calculateMonthlyPayment(values)).toBeLessThanOrEqual('15');
}
)
/// etc
