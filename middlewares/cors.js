const allowedCors = [
  "https://practicum.yandex.ru",
  "https://students-projects.ru",
  "localhost:3000",
  "mongodb://localhost:27017/pindie"
];

function cors(req, res, next) {
  const { origin } = req.headers;
  if (allowedCors.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }

  next();
}

module.exports = cors;
