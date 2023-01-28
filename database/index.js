const fs = require("fs");

function createTables(db) {
  const queries = fs
    .readFileSync("./database/createTables.sql")
    .toString()
    .replace("\n", "")
    .split(";");

  queries.forEach((query) => {
    db.run((query += ";"), (err) => {
      if (err) {
        console.log(err.message);
      }
    });
  });
}

const seedDatabase = (db) => {
  db.run(seedUsersTable, (err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("Table users seeded");
    }
  });
};

module.exports = {
  createTables,
  seedDatabase,
};
