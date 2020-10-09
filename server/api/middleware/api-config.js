const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const {
  DB_ENV
} = process.env

module.exports = server => {
  server.use(express.json());
  if (DB_ENV === 'development') {
    server.use(morgan("dev"));
  }
  server.use(helmet());
  server.use(cors());
};
