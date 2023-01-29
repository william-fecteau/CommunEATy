const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const { createTables, seedData } = require("./database");
const { getUserByUsername } = require("./database/userDto");
const { getNumOfUsersInEvent, getMilestones, getDeltaPrice } = require("./database/getEventInfo");
const cors = require("cors");
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

app.use(cors({
  origin: "*",
}));

app.use(express.json());

app.listen(42069, () => {
  console.log("Server started (http://localhost:42069/)! Haha xd so funny");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.all("/events", (req, res) => {
  res.send("Hello World!");
  // console.log("GET /events");
  // let events = [];
  // getEvents(db, (err, rows) => {
  //   if (err) {
  //     throw err;
  //   }
  //   for (row in rows) {
  //     events.push(row);
  //   }
  // });
  // res.send(events);
});

app.get("/usersInEvent", (req, res) => {
  getNumOfUsersInEvent(db, req.eventId, (err, row) => {
    res.send(row);
  });
});

app.get("/milestones", (req, res) => {
  let milestones = [];
  getMilestones(bd, eventId, (err, rows) => {
    if (err) {
      throw err;
    }
    for (milestoneRow in rows) {
      milestones.push({
        minNbUsers: milestoneRow.minNbUsers,
        priceDiscount: milestoneRow.priceDiscount
      });
    }
  });
  res.send(milestones);
});

app.get("/cost", (req, res) => {
  let deltaPrice = null
  getDeltaPrice(db, req.eventId, (err, rows) => {deltaPrice = rows;});
  res.send(deltaPrice);
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
})