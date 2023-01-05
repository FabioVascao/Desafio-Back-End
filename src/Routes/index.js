const {Router} = require("express");

const usersRouter = require("./users.Router");
const notesRouter = require("./notes.Router");

const routes = Router();
routes.use("/users", usersRouter);
routes.use("/notes", notesRouter);

module.exports = routes;