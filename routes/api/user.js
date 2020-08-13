const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const UserModel = require('../../models/user.model');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.post('/register', async function (request, response) {
    try {
        var user = new UserModel(request.body);
        var result = await user.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});
app.post('/login', async function (request, response) {
    const user = await UserModel.findOne({ email: request.body.email });
    if (!user) return res.status(400).send("Wrong user");
});
app.get('/user', async function (request, response) {
    try {
        var result = await UserModel.find().exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});
app.get('/user/:id', async function (request, response) {
    try {
        var user = await UserModel.findById(request.params.id).exec();
        response.send(user);
    } catch (error) {
        response.status(500).send(error);
    }
})
app.put('/user', async function (res, req) {

});
app.delete('/user', async function (res, req) {

});

module.exports = app;