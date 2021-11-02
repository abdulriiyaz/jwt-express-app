const monk = require("monk");
const db = monk("localhost/auth-user");

module.exports = db;
