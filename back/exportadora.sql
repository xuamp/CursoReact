-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 11-11-2022 a las 00:44:33
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `exportadora`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `Titulo` varchar(500) NOT NULL,
  `Copete` varchar(1000) NOT NULL,
  `Cuerpo` varchar(10000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `Titulo`, `Copete`, `Cuerpo`) VALUES
(1, 'Pymes, cautelares, compras con dólares propios: los detalles del esquema de control de importaciones', 'A dos semanas del estreno del nuevo sistema para importar, casi el 51% de las solicitudes ya tiene autorizado y con fecha el acceso al dólar oficial para pagar. Las pymes podrán adelantar parte del pago, mientras otras firmas podrán usar dólares propios focalizados en bienes de lujo.\r\n', 'El esquema está funcionando muy bien, sostienen en las oficinas oficiales, al minimizar las quejas que distintos sectores dejaron trascender con el cambio de sistema. A la vez, se preparan para la primera reunión del comité del SIRA, donde la AFIP, la Aduana, el Banco Central y la Secretaría de Comercio evaluarán, los martes y los jueves, ajustes a alguna de las variables de control o sumar sectores a los prioritarios: energía, minerales y medicamentos.\r\n\r\nFueron 12.048 operadores registró operaciones de importación entre esa fecha y este miércoles 2 de novimbre, de las cuales el 40% son pequeñas y medianas empresas (pymes), pero que representan solo el 10% de las operaciones y apenas un 5% del valor total de compras en el exterior.\r\n\r\nLeé también: Dólar para turistas extranjeros: los que paguen con tarjeta accederán a una cotización más alta que la oficial\r\n\r\nEn ese sentido, el 77,7% de las pymes que anotó operaciones en el SIRA tiene fecha de acceso al mercado de cambios (MULC) para pagar los embarques que lleguen a la Argentina.\r\n\r\nY tras varias reuniones con el sector, el Gobierno definió que las pymes podrán acceder a adelanto de US$50.000 mensuales para pagar las compras al exterior de insumos clave para la producción. Según pudo saber TN, La medida será terminada de definir este jueves en la reunión de directorio del Banco Central (BCRA).\r\n\r\nNo todas las empresas podrán importar con dólares propios\r\nDesde este martes, además, como anticipó TN, las empresas que paguen con sus propios dólares no tienen mayores obstáculos para importar.\r\n\r\nPero no cualquier firma lo puede hacer, aclaran en los despachos oficiales: “No va a incidir en insumos, no es un sistema para eso. Cualquier empresa no podrá importar aun con sus propios dólares”, sostienen.\r\n\r\nRemarcan que un esquema pensado para compañías que quieran ingresar al país bienes de capital: por caso, una empresa del exterior que remite una maquinaria a su filial sin que ingresen y salgan los dólares para pagarla. En este apartado hubo 500 declaraciones por US$82 millones en dos días.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'Damian', '9ef3a94687b07a0613da7f9fb450efca'),
(2, 'Natalia', '24bce6959b70ed51943849366636bc54'),
(3, 'Dami', '5e951075df92a85b136c4779ea5d95c0');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
