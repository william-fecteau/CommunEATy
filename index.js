const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const { createTables, seedDatabase } = require("./database");
const { getUserByUsername } = require("./database/userDto");

const db_name = path.join(__dirname, "database", "apptest.db");
const db = new sqlite3.Database(db_name, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful connection to the database 'apptest.db'");
});

createTables(db);

const app = express();

app.listen(42069, () => {
  console.log("Server started (http://localhost:42069/)! Haha xd so funny");
});

app.get("/", (req, res) => {
  let t = getUserByUsername(db, "gamer");
  console.log(t);
  res.send();
});
