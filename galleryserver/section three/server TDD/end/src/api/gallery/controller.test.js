/**
 * @jest-environment node
 */

const all_gallery = require("./model");
const { images } = require("./controller");

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

beforeEach(() => all_gallery.find.mockClear());

test("images() returns list of a images", async () => {
  const { req, res, mockCallback } = setUp();
  await images(req, res);
  expect(mockCallback.mock.calls.length).toBe(1);
}, 8000);
