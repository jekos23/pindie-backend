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

gamesRouter.post("/games", findAllGames, createGame, sendGameCreated);
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.put("/games/:id", findGameById, updateGame,  sendGameUpdated);
gamesRouter.delete("/games/:id", deleteGame, sendGameDeleted);
module.exports = gamesRouter;
