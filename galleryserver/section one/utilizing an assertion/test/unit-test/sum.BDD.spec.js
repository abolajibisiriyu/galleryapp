const sum = require("../../sum");
const expect = require("chai").expect;
const should = require("chai").should(); //actually call the function

it("adds 1 + 2 to equal 3 using expect interface", () => {
  expect(sum(1, 2)).to.equal(3);
});

it("adds 1 + 2 to equal 3 using should interface", () => {
  sum(1, 2).should.to.equal(3);
});
