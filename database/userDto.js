const { dbGet, dbRun, dbAll } = require("./sqliteExtensions");

async function getUserByUsername(bd, username) {
  let query = "SELECT * FROM Users WHERE username = ?";
  return await dbGet(bd, query, [username]);
}

async function addFriendAsync(bd, userId1, userId2) {
  let query = "INSERT INTO Friends (fk_user1Id, fk_user2Id) VALUES (?, ?)";
  await dbRun(bd, query, [userId1, userId2]);
}

async function getFriendIds(bd, userId) {
  let query = "SELECT * FROM Friends WHERE fk_user1Id = ? OR fk_user2Id = ?";
  let results = await dbAll(bd, query, [userId, userId]);

  let friendIds = [];
  for (let result of results) {
    let friendId;
    if (result.fk_user1Id == userId) {
      friendId = result.fk_user2Id;
    } else {
      friendId = result.fk_user1Id;
    }
    friendIds.push(friendId);
  }

  return friendIds;
}

module.exports = {
  getUserByUsername,
  addFriendAsync,
  getFriendIds,
};
