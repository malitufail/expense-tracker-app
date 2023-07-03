const mysql = require("mysql2");

// connect mySQL
console.log("calling db.js")
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Wh0isthis??",
  database: "expense_tracker",
  port: 3306,
  charset: "utf8mb4"
});

connection.connect((error) => {
  if (error) {
    console.log("error in db.js: ", error);
    throw error;
  }
  console.log("Successfully connected to the database.");
});

module.exports = connection;
