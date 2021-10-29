const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const helmet = require("helmet"),
  server = express();
const { setRoutes } = require("./routes");
// For security

server.use(helmet());
server.use(cookieParser());

const cors = require("cors"),
  // Allow Origins according to your need.
  corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
  };

server.use(cors(corsOptions));

server.use(bodyParser.json());

server.use(function (req, res, next) {
  res.header("Content-Type", "application/json;charset=UTF-8");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Setting up Routes
setRoutes(server);

module.exports = { server };
