const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const cors = require("cors");

const { createTables, seedData } = require("./database");
const { getUserByUsername } = require("./database/userDto");
const {
  getFullEventsAsync,
  getFullEventAsync,
  joinEventAsync
} = require("./database/eventDto");

const db_name = path.join(__dirname, "database", "apptest.db");
const db = new sqlite3.Database(db_name, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful connection to the database 'apptest.db'");
});

createTables(db);

db.all("SELECT * FROM Users;", (err, rows) => {
  if (err) {
    throw err;
  }
  if (rows.length == 0) {
    seedData(db);
  }
});

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.listen(42069, () => {
  console.log("Server started (http://localhost:42069/)! Haha xd so funny");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/events", async (req, res) => {
  let fullEvents = await getFullEventsAsync(db);
  return res.status(200).send(fullEvents);
});

app.get("/events/:eventId", async (req, res) => {
  let fullEvent = await getFullEventAsync(db, req.params.eventId);
  return res.status(200).send(fullEvent);
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  getUserByUsername(db, username, (err, user) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (user == undefined) {
        res.status(404).send("User not found");
      }
      res.status(200).send(user);
    }
  });
});

app.post("/joinEvent", async (req, res) => {
  const userId = req.body.user_id;
  const eventId = req.body.event_id;

  await joinEventAsync(db, eventId, userId);
  return res.status(201);
});

