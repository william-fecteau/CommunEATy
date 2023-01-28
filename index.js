const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const {createTables, seedDatabase} = require('./database');

const db_name = path.join(__dirname, "data", "apptest.db");
const db = new sqlite3.Database(db_name, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful connection to the database 'apptest.db'");
});

createTables(db);
seedDatabase(db);

const app = express();

app.listen(42069, () => {
  console.log("Server started (http://localhost:42069/)! Haha xd so funny");
});

app.get("/database", (req, res) => {
    res.db.all('SELECT');
})

app.get("/", (req, res) => {
  res.send ("Wassup la salade");
});