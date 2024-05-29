// Файл routes/games.js

const gamesRouter = require("express").Router();

const findAllGames = require("../middlewares/games");
const createGame = require("../middlewares/games");
const sendGameCreated = require("../controllers/games");
const findGameById = require("../middlewares/games");
const sendGameById = require("../controllers/games");
const updateGame = require("../middlewares/games");
const sendGameUpdated = require("../controllers/games");
const deleteGame = require("../middlewares/games");
const sendGameDeleted = require("../controllers/games");
const checkAuth  = require("../middlewares/auth.js");
const checkIsGameExists  = require("../middlewares/games.js");
const checkIfCategoriesAvaliable  = require("../middlewares/categories.js");
const checkEmptyFields  = require("../middlewares/games.js");
const checkIfUsersAreSafe = require("../middlewares/users.js");
const checkIsVoteRequest = require("../middlewares/games.js");

gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  createGame,
  sendGameCreated
);
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIsVoteRequest,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  updateGame,
  sendGameUpdated
);
gamesRouter.delete("/games/:id", checkAuth, deleteGame, sendGameDeleted);
module.exports = gamesRouter;
