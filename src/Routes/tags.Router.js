const {Router} = require("express");

const TagsController = require("../Controllers/TagsController");

const tagsRouter = Router();

const tagsController = new TagsController();

tagsRouter.post("/:user_id", tagsController.create);

module.exports = tagsRouter;