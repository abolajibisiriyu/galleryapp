const sum = require("../../sum");
var assert = require("chai").assert;

it("adds 2 + 2 to equal 4 using the assert interface", () => {
  assert.equal(sum(2, 2), 4);
});
