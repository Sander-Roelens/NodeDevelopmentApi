const db = require('../database.db')

// Function to get a question by id
function getQuestionById(id, callback) {
    db.get('SELECT * FROM question WHERE id = ?', [id], (err, row) => {
        if (err) {
            console.error('Error getting question:', err.message);
        } else {
            callback(row);
        }
    });
}
function createQuestion(title, category, questionText, amountOfPoints, subjectType, timed, amountOfTime, mediaUrl, media) {
    db.run('INSERT INTO question (title, category, question_text, amount_of_points, subject_type, timed, amount_of_time, mediaUrl, media) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [title, category, questionText, amountOfPoints, subjectType, timed, amountOfTime, mediaUrl, media], (err) => {
            if (err) {
                console.error('Error creating question:', err.message);
            } else {
                console.log('Question created successfully.');
            }
        });
}

// Function to delete a question by id
function deleteQuestion(id) {
    db.run('DELETE FROM question WHERE id = ?', [id], (err) => {
        if (err) {
            console.error('Error deleting question:', err.message);
        } else {
            console.log('Question deleted successfully.');
        }
    });
}

// Function to edit question details
function editQuestion(id, title, category, questionText, amountOfPoints, subjectType, timed, amountOfTime, mediaUrl, media) {
    db.run('UPDATE question SET title = ?, category = ?, question_text = ?, amount_of_points = ?, subject_type = ?, timed = ?, amount_of_time = ?, mediaUrl = ?, media = ? WHERE id = ?',
        [title, category, questionText, amountOfPoints, subjectType, timed, amountOfTime, mediaUrl, media, id], (err) => {
            if (err) {
                console.error('Error editing question:', err.message);
            } else {
                console.log('Question details updated successfully.');
            }
        });
}

// Function to get all questions
function getAllQuestions(callback) {
    db.all('SELECT * FROM question', (err, rows) => {
        if (err) {
            console.error('Error getting questions:', err.message);
        } else {
            callback(rows);
        }
    });
}

// Function to get all questions by subject type
function getAllQuestionsBySubjectType(subjectType, callback) {
    db.all('SELECT * FROM question WHERE subject_type = ?', [subjectType], (err, rows) => {
        if (err) {
            console.error('Error getting questions by subject type:', err.message);
        } else {
            callback(rows);
        }
    });
}


module.exports = {createQuestion, editQuestion, deleteQuestion, getQuestionById, getAllQuestions, getAllQuestionsBySubjectType }