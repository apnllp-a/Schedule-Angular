const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./model.js")(mongoose);
db.userAll = require("./user_all_module.js")(mongoose)

module.exports = db;