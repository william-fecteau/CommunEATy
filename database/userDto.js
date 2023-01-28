function getUserByUsername(bd, username, callback) {
  let query = "SELECT * FROM users WHERE username = ?";
  bd.get(query, [username], callback);
}

module.exports = {
  getUserByUsername,
};
