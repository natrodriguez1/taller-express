var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Taller 2' });
});
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
