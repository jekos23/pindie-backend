// Файл routes/games.js

const gamesRouter = require("express").Router();

const findAllGames = require("../middlewares/games");
const createGame = require("../middlewares/games");
const sendGameCreated = require("../controllers/games");
const findGameById = require("../middlewares/games");
const sendGameById = require("../controllers/games");

gamesRouter.post("/games", findAllGames, createGame, sendGameCreated);
gamesRouter.get("/games/:id", findGameById, sendGameById);
module.exports = gamesRouter;
