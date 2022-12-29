const {Router} = require("express");

const usersRouter = require("./users.Router");

const routes = Router();

routes.use("/users", usersRouter);

module.exports = routes;