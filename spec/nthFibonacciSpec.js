describe('nthFibonacci', function() {
  it('should properly compute the fibonacci sequence for the number given and return the result', function() {
    expect(nthFibonacci(1)).to.equal(1);
    expect(nthFibonacci(2)).to.equal(1);
    expect(nthFibonacci(3)).to.equal(2);
    expect(nthFibonacci(4)).to.equal(3);
    expect(nthFibonacci(5)).to.equal(5);
  });
});