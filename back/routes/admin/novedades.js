var express = require('express');
const pool = require('../../models/bd');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel')

router.get('/', async function(req, res, next) {

var novedades = await novedadesModel.getNovedades();

  res.render('admin/novedades', {
    layout: 'admin/layout',
    persona: req.session.nombre,
    novedades
  });
});

router.get('/agregar', function (req, res, next) {  
    res.render('admin/agregar', {
      layout: 'admin/layout',
    });
  });

router.post('/agregar', async (req, res, next) => {
  try{
    if (req.body.Titulo != "" && req.body.Copete != "" && req.body.Cuerpo != "") {
      await novedadesModel.insertNovedad(req.body);
      res.redirect('/admin/novedades')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: "todos los campos son requeridos"
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: "No se cargo la novedad"
    })
  }
})

router.get('/eliminar/:id', async (req, res, next) => {
   var id = req.params.id;
   await novedadesModel.deleteNovedadesById(id);
   res.redirect('/admin/novedades');
})

router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  var novedad = await novedadesModel.getNovedadesById(id);
  res.render('admin/modificar', {
    layout: 'admin/layout', 
    novedad  })
})

router.post('/modificar', async (req, res, next) => {
  try {

    var obj = {
      Titulo: req.body.Titulo,
      Copete: req.body.Copete,
      Cuerpo: req.body.Cuerpo
    }

    await novedadesModel.modificarNovedadById(obj, req.body.id);
    res.redirect('/admin/novedades');
  } catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'Nose se modifico la novedad'

    })
  }
})


module.exports = router;
