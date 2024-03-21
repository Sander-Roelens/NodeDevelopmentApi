const sqlite3 = require('sqlite3').verbose();

// Open or create the database file
const db = new sqlite3.Database('db/database.db', (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the database.');
    }
});

module.exports = db;
