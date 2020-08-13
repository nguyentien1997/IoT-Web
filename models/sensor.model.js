const mongoose = require('mongoose');

const SensorSchema = mongoose.Schema({
    name: { require: true, type: String },
    value: { require: true, type: Number },
    time: { require: true, type: Date, }
})

module.exports = mongoose.model('sensor', SensorSchema);