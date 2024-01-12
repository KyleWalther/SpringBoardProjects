

describe('beginning tests', function(){
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
})

describe('testing each input area', function(){

  let calcForm;

  beforeEach(function (){
    calcForm = document.getElementById('calc-form')
  })

it("display loan amount",function(){
  let loaninput = document.getElementById('loan-amount')
  let inputValue = 1000

loaninput.value = inputValue

calcForm.dispatchEvent(new Event('submit'))

expect(Number(loaninput.value)).toBe(inputValue)

})

it("display term in years", function(){
  let yearinput = document.getElementById('loan-years')
  let inputValue = 10

yearinput.value = inputValue

calcForm.dispatchEvent(new Event('submit'))

expect(Number(yearinput.value)).toBe(inputValue)
})

it("display yearly rate", function(){
  let rateinput = document.getElementById('loan-rate')
  let inputValue = 5

rateinput.value = inputValue

calcForm.dispatchEvent(new Event('submit'))

expect(Number(rateinput.value)).toBe(inputValue)

})

describe('button displaying calculated value', function(){

  let calcForm

  beforeEach(function () {
    calcForm = document.getElementById('calc-form');
  });


it('calculated answer', function(){
  let button = document.getElementById('calc-submit')
  let rateinput = document.getElementById('loan-rate')
  let yearinput = document.getElementById('loan-years')
  let loaninput = document.getElementById('loan-amount')
  let results = document.getElementById('monthly-payment')

  // values
  loaninput.value = 1000
  yearinput.value = 10
  rateinput.value = 5

  // shows the event of a submit
  calcForm.dispatchEvent(new Event('submit'));

  // a click is needed to activate the button
  button.click()

  let expectedValue = calculateMonthlyPayment({ amount: 1000, years: 10, rate: 5 }); 

  expect(results.textContent.trim()).toBe('$' + expectedValue.toString()); 


})

})
 
})