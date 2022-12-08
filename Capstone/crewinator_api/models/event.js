const connection = require('../dbConnect');
const mysql = require('mysql2');

function Event(title, eventDate, creatorID) {
    this.title = title;
    this.event_date = eventDate;
    this.creator_id = creatorID;
    this.creation_date = new Date();
    this.last_update = new Date();
}

function createEvent(req, res){
    const event = new Event(req.title, req.event_date, req.creator_id);

    const sql = mysql.format(`INSERT INTO events SET ?`, event);

    connection.query(sql,  (err, result) => {
        if (err) throw err;
        res.send({result: 200, data: result});
    });
}

function getAll(res){
    connection.query("SELECT * FROM events",  (err, result) => {
        if (err) throw err;
        res.send({result: 200, data: result});
    });
}

module.exports = {
    Event,
    createEvent,
    getAll
}