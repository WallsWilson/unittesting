
it('should calculate the monthly rate correctly', function () {
  let values = {
    amount :500000,
    years : 15,
    rate : 2.19,
  }
  expect(calculateMonthlyPayment(values)).toEqual('3261.47')
});


it("should return a result with 2 decimal places", function() {
let values = {
  amount : 122000,
   years : 30,
  rate : 3.5,
};
  expect(calculateMonthlyPayment(values)).toEqual('547.83')
});

/// etc
