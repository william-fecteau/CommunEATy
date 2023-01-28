const createUsersTable = `CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);`;

const seedUsersTable = `INSERT INTO users (name, password) VALUES
    ('admin', 'admin'),
    ('gamer', 'gamer'),
    ('user', 'user');
`;

module.exports = {
    createUsersTable,
    seedUsersTable
};