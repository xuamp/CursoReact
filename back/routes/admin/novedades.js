var express = require('express');
const pool = require('../../models/bd');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel')
var util = require('util');
var cloudinary = require('cloudinary').v2;
var uploader = util.promisify(cloudinary.uploader.upload);
var destroy = util.promisify(cloudinary.uploader.destroy);


router.get('/', async function(req, res, next) {

var novedades = await novedadesModel.getNovedades();


novedades = novedades.map(novedad => {
  if (novedad.img_id) {
    const imagen = cloudinary.image(novedad.img_id,{
      width: 100,
      height: 100,
      crop: 'fill'
    });
    return{
      ...novedad,
      imagen
    }
  } else {
    return{ 
      ...novedad,
      imagen: ''
    }
  }
})

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
    var img_id = '';
    console.log(req.files.imagen);

    if (req.files && Object.keys(req.files).length > 0) {
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }

    if (req.body.Titulo != "" && req.body.Copete != "" && req.body.Cuerpo != "") {
      await novedadesModel.insertNovedad({
        ...req.body,
        img_id
      });
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

   let novedad = await novedadesModel.getNovedadesById(id);
   if(novedad.img_id) {
    await (destroy(novedad.img_id));
   }

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

    let img_id = req.body.img_original;
    let borrar_img_vieja = false;

    if(req.body.img_delete === "1") {
      img_id = null;
      borrar_img_vieja = true;
      if(req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id
        borrar_img_vieja = true;
      }
      } else {
        if(req.files && Object.keys(req.files).length > 0) {
          imagen = req.files.imagen;
          img_id = (await uploader(imagen.tempFilePath)).public_id
          borrar_img_vieja = true;
        }
      }

      if(borrar_img_vieja && req.body.img_original) {
        await (destroy(req.body.img_original));
      }

    var obj = {
      Titulo: req.body.Titulo,
      Copete: req.body.Copete,
      Cuerpo: req.body.Cuerpo,
      img_id
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
