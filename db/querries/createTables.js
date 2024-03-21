const db = require('../db')

db.run(`CREATE TABLE IF NOT EXISTS team (
    teamId INTEGER PRIMARY KEY,
    teamName TEXT,
    score INT,
    extraInfo TEXT
)`);

db.run(`CREATE TABLE IF NOT EXISTS question (
    id INTEGER PRIMARY KEY,
    title TEXT,
    category TEXT,
    question_text TEXT,
    amount_of_points INTEGER,
    subject_type TEXT,
    timed BOOLEAN,
    amount_of_time INTEGER,
    mediaUrl TEXT,
    media BLOB
)
`);
