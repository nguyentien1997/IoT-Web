var event = require('events');
var sensorModel = require('../models/sensor.model')

var eventEmitter = new event.EventEmitter();

eventEmitter.on('SAVE_DATA', function (data) {
    console.log(data);
    let msg = new sensorModel(data)
    msg.save()
        .then(doc => {
            console.log(doc)
        })
        .catch(err => {
            console.error(err)
        })
})

module.exports = eventEmitter