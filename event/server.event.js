var event = require('events');
const client = require('../mqtt/server.mqtt');
const eventDb = require('./db.event');
const { json } = require('body-parser');

var eventEmitter = new event.EventEmitter();

eventEmitter.on('CAPTURE_IMAGE', function (distance) {
    console.log(distance)
});

eventEmitter.on('POST_SENSOR', function (data) {
    eventDb.emit('SAVE_DATA', data);
});

// eventEmitter.on('GET_STATUS', function (distance) {
//     console.log(distance)
// });

module.exports = eventEmitter