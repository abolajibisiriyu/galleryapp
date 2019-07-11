const axios = require("axios");
const server = require("../../../bin/www");
const { images } = require("../../../seed/gallery");

function setUp() {
  const port = server.address().port;
  const baseURL = `http://localhost:${port}/api`;
  const api = axios.create({ baseURL });
  return {
    api
  };
}

afterAll(() => server.close());

test("returns list of images", async () => {
  const { api } = setUp();
  const { data } = await api.get("/");

  expect(images).toEqual(expect.arrayContaining(data));
}, 100000);
