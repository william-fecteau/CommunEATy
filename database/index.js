const {createUsersTable, seedUsersTable} = require('./users');

const createTables = (db) => {
    db.run(createUsersTable, (err) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log('Table users created');
        }
    });
};

const seedDatabase = (db) => {
    db.run(seedUsersTable, (err) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log('Table users seeded');
        }
    });
};

module.exports = {
    createTables,
    seedDatabase
};