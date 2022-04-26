const winston = require("winston");
const mongoose = require("mongoose");
const config = require("config");

module.exports = function () {
  const db = config.get("db");
  mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    // mongoose.connect(db)
    //a small cheat
    //another..
    //yet another...

    .then(() => winston.info(`Connected to ${db}...`));
};
