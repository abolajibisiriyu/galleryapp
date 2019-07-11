const galleryRouter = require("./gallery/router");

function routes(app) {
  app.use("/", galleryRouter);
}

module.exports = routes;
