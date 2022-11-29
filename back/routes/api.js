var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');



router.get('/novedades', async function (req, res, next) {
let novedades = await novedadesModel.getNovedades();    

novedades = novedades.map(novedades => {
  if (novedades.img_id) {
    const imagen = cloudinary.url(novedades.img_id,{
      width: 960,
      height: 400,
      crop: 'fill'
    });
    return{
      ...novedades,
      imagen
    }
  } else {
    return{ 
      ...novedades,
      imagen: ''
    }
  }
});

res.json(novedades);

});

router.post('/contacto', async (req, res) => {
  const mail = {
    to: 'xuamp@yahoo.com.ar',
    subject: 'Contacto Web',
    html: `${req.body.nombre} de la empresa ${req.body.empresa}, con direccion postal ${req.body.direccion}, Ciudad de ${req.body.ciudad}, ${req.body.pais}, acaba de enviar el siguiente mensaje:<br><br>
    ${req.body.mensaje}<br><br> Sus datos: <br> Telefono: ${req.body.telefono}<br>Celular: ${req.body.celular}<br> Mail: ${req.body.mail}`
  }

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

await transport.sendMail(mail)

res.status(201).json({
  error: false,
  message: 'Mensaje Enviado'
});

});

  

module.exports = router;