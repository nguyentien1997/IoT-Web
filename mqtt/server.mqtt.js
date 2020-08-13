var mqtt = require('mqtt');
var event = require('../event/server.event');

var host = 'mqtt://broker.hivemq.com:1883';

var client = mqtt.connect(host);

client.on('connect', function () {
    console.log('Connected!');
})

client.on('message', function (topic, message) {
    switch (topic) {
        case 'sensor/distance':
            var jsonData = JSON.parse(message);
            event.emit('POST_SENSOR', jsonData);
    }
})

module.exports = client;