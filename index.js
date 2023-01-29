const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const { createTables, seedData } = require("./database");
const { getUserByUsername } = require("./database/userDto");

const db_name = path.join(__dirname, "database", "apptest.db");
const db = new sqlite3.Database(db_name, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful connection to the database 'apptest.db'");
});

createTables(db);
db.all("SELECT * FROM Users;",(err, rows ) => {
  if (err) {
    throw err;
  }
  if (rows.length == 0) {
    seedData(db);
  }
});

const app = express();

app.listen(42069, () => {
  console.log("Server started (http://localhost:42069/)! Haha xd so funny");
});

app.get("/", (req, res) => {
  getUserByUsername(db, "gamer", (err, row) => {
    res.send(row);
  });
});
