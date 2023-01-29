const fs = require("fs");

function _runSqlScript(db, scriptPath) {
  const queries = fs
    .readFileSync(`./database/${scriptPath}`)
    .toString()
    .replace("\n", "")
    .split(";");

  db.serialize(() => {
    db.run("PRAGMA foreign_keys=OFF;");
    db.run("BEGIN TRANSACTION;");
    queries.forEach((query) => {
      if (query) {
        db.run(query + ";", (err) => {
          if (err) {
            console.log("QUERY FAILED : " + query);
            throw err;
          }
        });
      }
    });
    db.run("COMMIT;");
  });
}

function createTables(db) {
  _runSqlScript(db, "createTables.sql");
}


function seedData(db) {
  _runSqlScript(db, "seedData.sql");
}


module.exports = {
  createTables,
  seedData,
};
