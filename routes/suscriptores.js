var express = require('express');
var router = express.Router();

const {Sequelize, Op} = require('sequelize');
const Suscriptor = require('../models').suscriptor;
const Interes = require('../models').interes;

router.get('/findAll/json',
function(req, res, next) {
    Suscriptor.findAll({
        attributes: { exclude:
        ["updatedAt"] },
        include: [{
            model: Interes,
            attributes: ['descripcion'],
            through: {attributes: []}
        }],
    })
    .then(suscriptor => {
        res.json(suscriptor);
    })
    .catch(error =>
    res.status(400).send(error))
});
router.get('/findById/:id/json', function(req, res, next){
    let id = parseInt(req.query.id);
    Suscriptor.findAll({
        attributes: { exclude: ["updatedAt"] } ,
        include: [{
            model: Interes,
            attributes: ['descripcion'],
            through: {attributes: []}
        }],
        where: {
            id: {
            [Op.is]: [id]
            }
        }
        })
        .then(suscriptor => {
        res.json(suscriptor);
        })
        .catch(error =>
        res.status(400).send(error))
})



module.exports = router;
