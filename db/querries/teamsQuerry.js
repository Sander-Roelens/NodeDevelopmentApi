const db = require("../database.db")

function createTeam(teamName, extraInfo) {
    db.run('INSERT INTO team (teamName, extraInfo) VALUES (?, ?)',
        [teamName, extraInfo], (err) => {
            if (err) {
                console.error('Error creating team:', err.message);
            } else {
                console.log('Team created successfully.');
            }
        });
}

// Function to delete a team by teamId
function deleteTeam(teamId) {
    db.run('DELETE FROM team WHERE teamId = ?', [teamId], (err) => {
        if (err) {
            console.error('Error deleting team:', err.message);
        } else {
            console.log('Team deleted successfully.');
        }
    });
}

// Function to edit team details
function editTeam(teamId, teamName, score, extraInfo) {
    db.run('UPDATE team SET teamName = ?, score = ?, extraInfo = ? WHERE teamId = ?',
        [teamName, score, extraInfo, teamId], (err) => {
            if (err) {
                console.error('Error editing team:', err.message);
            } else {
                console.log('Team details updated successfully.');
            }
        });
}


// Function to get all teams
function getAllTeams(callback) {
    db.all('SELECT * FROM team', (err, rows) => {
        if (err) {
            console.error('Error getting teams:', err.message);
        } else {
            callback(rows);
        }
    });
}
// Function to get a team by teamId
function getTeamById(teamId, callback) {
    db.get('SELECT * FROM team WHERE teamId = ?', [teamId], (err, row) => {
        if (err) {
            console.error('Error getting team:', err.message);
        } else {
            callback(row);
        }
    });
}


module.exports = {createTeam, editTeam, getTeamById ,getAllTeams, deleteTeam}