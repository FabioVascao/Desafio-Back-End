const {Router} = require("express");

const usersRouter = require("./users.Router");
const notesRouter = require("./notes.Router");
const tagsRouter = require("./tags.Router");

const routes = Router();
routes.use("/users", usersRouter);
routes.use("/notes", notesRouter);
routes.use("/tags", tagsRouter);

module.exports = routes;