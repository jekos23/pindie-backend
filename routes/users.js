const usersRouter = require("express").Router();

const findAllUsers = require("../middlewares/users");
const createUser = require("../middlewares/users");
const sendUserCreated = require("../controllers/users");
const findUserById = require("../middlewares/users");
const sendUserById = require("../controllers/users");
const updateUser = require("../middlewares/users");
const sendUserUpdated = require("../controllers/users");
const deleteUser = require("../middlewares/users");
const sendUserDeleted = require("../controllers/users");

usersRouter.post("/users", findAllUsers, createUser, sendUserCreated);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.put("/users/:id", updateUser, sendUserUpdated );
usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);
module.exports = usersRouter;
