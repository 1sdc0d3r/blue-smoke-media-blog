const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const {
  DB_ENV
} = process.env

module.exports = server => {
  server.use(express.json());
  if (DB_ENV === 'development') {
    server.use(require("morgan")("dev"));
  }
  server.use(helmet());
  server.use(cors());
};
