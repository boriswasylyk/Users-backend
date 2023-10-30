const { getAll, create, remove, update } = require('../controllers/user.controller');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/") // /todos
	.get(getAll)
	.post(create);

userRouter.route("/:id") // /todos/:id
	.delete(remove)
	.put(update);

module.exports = userRouter;
