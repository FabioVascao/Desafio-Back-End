const {Router} = require("express");

const UsersController = require("../Controllers/UsersController");

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.post("/", usersRouter.create);
usersRouter.put("/:id", usersRouter.update);

module.exports = usersRouter;