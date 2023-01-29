function getUserByUsername(bd, username, callback) {
  let query = "SELECT * FROM Users WHERE username = ?";
  bd.get(query, [username], callback);
}

module.exports = {
  getUserByUsername,
};
