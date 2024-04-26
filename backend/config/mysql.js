const mysql = require("mysql");
const dataBase = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "proconnect"
});

dataBase.connect((error) => {
  if (error) throw error;

  console.log("database connected successfully");
});

module.exports = dataBase;
