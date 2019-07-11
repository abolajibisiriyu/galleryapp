/**
 * @jest-environment node
 */

const all_gallery = require("./model");
const { images } = require("./controller");

//mock the model
jest.mock("./model", () => {
  return {
    find: jest.fn(async () => ["one", "two"])
  };
});

function setUp() {
  const mockCallback = jest.fn(payload => payload);
  const req = {};
  const res = {
    json: mockCallback
  };
  return {
    req,
    res,
    mockCallback
  };
}

test("images() should return a list of images", async () => {
  const { req, res, mockCallback } = setUp();
  await images(req, res);
  expect(mockCallback.mock.calls.length).toBe(1);
});
