/**
 * @jest-environment node
 */

const axios = require("axios");
const server = require("../../../bin/www");
const { images } = require("../../../seed/gallery");

function setUp() {
  const port = server.address().port;
  const baseURL = `http://localhost:${port}`;
  const api = axios.create({ baseURL });
  return {
    api
  };
}

afterAll(() => server.close());

test("returns a list of images", async () => {
  const { api } = setUp();
  const { data } = await api.get("/api");

  expect(images).toEqual(expect.arrayContaining(data));
}, 8000);
