const knex = require('knex');
const configOptions = require("../knexfile");
const {
    DB_ENV
} = process.env || "development";
// console.log(configOptions[DB_ENV])
module.exports = knex(configOptions[DB_ENV])
// module.exports = require("knex")(configOptions[DB_ENV])
