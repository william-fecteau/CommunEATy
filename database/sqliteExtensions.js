async function dbAll(db, query, params = []) {
  return new Promise(function (resolve, reject) {
    db.all(query, params, function (err, rows) {
      if (err) {
        return reject(err);
      }
      resolve(rows);
    });
  });
}

async function dbGet(db, query, params = []) {
  return new Promise(function (resolve, reject) {
    db.get(query, params, function (err, row) {
      if (err) {
        return reject(err);
      }
      resolve(row);
    });
  });
}

async function dbRun(db, query, params = []) {
  return new Promise(function (resolve, reject) {
    db.run(query, params, function (err, row) {
      if (err) {
        return reject(err);
      }
      resolve(row);
    });
  });
}

module.exports = {
  dbAll,
  dbGet,
  dbRun
};
