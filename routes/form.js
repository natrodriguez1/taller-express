var express = require('express');
var router = express.Router();

const {Sequelize, Op} = require('sequelize');
const Suscriptor = require('../models').suscriptor;

router.post('/', function(req, res, next) {
    let {nombre, email, fecha_registro} = req.body;
    Suscriptor.create({
        nombre: nombre,
        email: email,
        fecha_registro: fecha_registro,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    .then(suscriptor => {
        res.json(suscriptor);
    })
    .catch(error =>
        res.status(400).send(error))
});

module.exports = router;
