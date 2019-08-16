describe('sumArray', function() {
  it('should sum all numbers in the array and return the result', function() {
    expect(sumArray([1])).to.equal(1);
    expect(sumArray([2, 3])).to.equal(5);
    expect(sumArray([10, 20])).to.equal(30);
    expect(sumArray([2, 4, 6, 8])).to.equal(20);
    expect(sumArray([1, 2, 3, 4, 5])).to.equal(15);
  });
});