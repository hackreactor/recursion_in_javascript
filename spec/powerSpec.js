describe('power', function() {
  it('should peform the exponent math and return the correct result', function() {
    expect(power(2, 2)).to.equal(4);
    expect(power(2, 3)).to.equal(8);
    expect(power(2, 4)).to.equal(16);
    expect(power(5, 3)).to.equal(125);
    expect(power(10, 3)).to.equal(1000);
  });
});