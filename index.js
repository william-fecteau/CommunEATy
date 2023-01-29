const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const cors = require("cors");

const { createTables, seedData } = require("./database");
const {
  getUserByUsername,
  addFriendAsync,
  getFriends,
} = require("./database/userDto");
const {
  getFullEventsAsync,
  getFullEventAsync,
  joinEventAsync,
  getJoinedEventsAsync
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

app.get("/events/:userId", async (req, res) => {
  let fullEvents = await getFullEventsAsync(db, req.params.userId);
  return res.status(200).send(fullEvents);
});

app.get("/events/:userId/joined", async (req, res) => {
  let joinedEvents = await getJoinedEventsAsync(db, req.params.userId);
  return res.status(200).send(joinedEvents);
});

app.get("/events/:userId/:eventId", async (req, res) => {
  let fullEvent = await getFullEventAsync(
    db,
    req.params.eventId,
    req.params.userId
  );
  return res.status(200).send(fullEvent);
});

app.get("/friends/:user1Id/:username", async (req, res) => {
  let user1Id = req.params.user1Id;
  let username = req.params.username;

  let user2 = await getUserByUsername(db, username);
  await addFriendAsync(db, user1Id, user2.pk_id);

  return res.sendStatus(201);
});

app.get("/friends/:userId/", async (req, res) => {
  let userId = req.params.userId;

  let friends = await getFriends(db, userId);

  return res.status(200).send(friends);
});

app.post("/login", async (req, res) => {
  const username = req.body.username;

  let user = await getUserByUsername(db, username);
  if (user == undefined) {
    res.status(404).send("User not found");
  }

  res.status(200).send(user);
});

app.post("/joinEvent", async (req, res) => {
  const userId = req.body.user_id;
  const eventId = req.body.event_id;

  await joinEventAsync(db, eventId, userId);
  return res.status(201);
});
