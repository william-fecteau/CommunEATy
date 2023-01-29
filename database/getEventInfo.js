function getNumOfUsersInEvent(bd, eventId, callback) {
  let query = "SELECT COUNT(*) FROM UserEvents WHERE eventId = ?;";
  bd.get(query, [eventId], callback);
}

function getMilestones(bd, eventId, callback) {
  let query = "SELECT * FROM Milestones WHERE eventId = ?;";
  bd.all(query, [eventId], callback);
}

function getDeltaPrice(bd, eventId, callback) {
  getNumOfUsersInEvent(bd, eventId, (err, row) => {
    if (err) {
      throw err;
    }
    getMilestones(bd, eventId, (err, rows) => {
      if (err) {
        throw err;
      }
      let deltaPrice = 0;
      for (milestoneRow in rows) {
        if (row.nbUsers >= milestoneRow.minNbUsers) {
          deltaPrice += milestoneRow.priceDiscount;
        }
      }
      callback(deltaPrice);
    });
  })
}

function getEvents(bd, callback) {
  let query = "SELECT * FROM Events;";
  bd.all(query, [], callback);
}
module.exports = {
  getEvents,
};