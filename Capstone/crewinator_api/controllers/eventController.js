const Models = require('../models/index');

function createEvent(req, res){
    console.log(req);
    Models.Event.createEvent(req, res);
}

function getEvents(res){
    Models.Event.getAll(res);
}

module.exports = {
    createEvent,
    getEvents
}