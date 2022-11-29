-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 29-11-2022 a las 01:06:29
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
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `Titulo`, `Copete`, `Cuerpo`, `img_id`) VALUES
(29, 'Mundial: las exportaciones de Mendoza a Medio Oriente aumentaron 43%\r\n', 'Al tercer trimestre de este año, ya se llevan exportados US$ 20 millones en productos como vino, mosto concentrado y frutas. Especialistas coinciden en el potencial de la zona para vender más bienes y servicios.\r\n\r\n', 'La llegada del Mundial a tierras árabes es una buena oportunidad para ver qué exporta Mendoza a los países de Medio Oriente, y cómo viene evolucionando ese mercado, con un notable aumento este año. A nivel cultural hay varias diferencias, pero se da una relación interesante con productos como mosto concentrado, frutas, vino y hasta servicios vinculados a tecnología.\r\n\r\n“Son volúmenes muy pequeños, muy puntuales”, comenzó a explicar Mario Bustos Carra, gerente general de la Cámara de Comercio Exterior de Cuyo, sobre estas exportaciones a Medio Oriente. Si bien hay restricciones en la mayoría de esos países para consumir alcohol, el vino es parte de esas ventas, sobre todo para el consumo de turistas. “Además, para toda esa zona, por ejemplo a Arabia Saudita, vendemos nueces y ahora también cerezas”, agregó.\r\n\r\nBustos Carra señaló que en general son mercados con un alto poder adquisitivo, con posibilidad de acceder a proveedores de distintas partes del mundo y por eso hay una fuerte competencia para acceder a ellos: “Las empresas que les venden deben tener un excelente nivel de administración y deben poder cumplir con los compromisos asumidos, porque la competencia es muy difícil.”', 'jk4qrwkseofyssxrqo94'),
(30, 'Ucrania y Rusia acordaron prorrogar el acuerdo sobre la exportación de granos desde puertos ucranianos por otros cuatro meses\r\n', 'En medio de una nueva ola de ataques rusos, los países prolongaron la iniciativa para la navegación segura de los buques con productos alimentarios y fertilizantes, con mediación de la ONU y Turquía. Iba a expirar este sábado\r\n', 'El acuerdo para exportar granos desde los puertos ucranianos ha sido prorrogado por un periodo de cuatro meses, lo que permitirá nuevas salidas de alimentos desde tres puertos de Ucrania ubicados en el Mar Negro.\r\n\r\nOleksii Kubrakov, ministro de Infraestructura de Ucrania, informó este jueves en su página de Facebook de que, dentro de la denominada iniciativa para la exportación de cereales desde el Mar Negro, acordada con Rusia con la mediación de la ONU y de Turquía, se ha alcanzado un acuerdo para prorrogar las exportaciones cuatro meses más.\r\n\r\nEl acuerdo fue confirmado por el propio presidente ucraniano, Volodimir Zelensky, en su cuenta de Twitter. “El acuerdo del grano se prolongará 120 días. Ucrania junto con Antonio Guterres (secretario general de la ONU) y Recep Erdogan(presidente de Turquía) tomaron una decisión clave en la lucha mundial contra la crisis alimentaria”, explicó el mandatario.\r\n\r\nPor su parte, Guterres expresó: “Aplaudo el acuerdo entre todas las partes para mantener la Iniciativa de Grano en el Mar Negro para facilitar la navegación segura de las exportaciones de grano, productos alimentarios y fertilizantes desde Ucrania”.\r\n\r\nErdogan había asegurado este miércoles desde Bali (Indonesia), donde asistía la cumbre del G20, que el mandatario ruso, Vladimir Putin, le había dado luz verde para renovar el acuerdo que facilita la salida de cereales y fertilizantes rusos y ucranianos, firmado en julio y que expiraba el próximo día 19.\r\n\r\n“Se ha llegado a un acuerdo para extender la operación del llamado ‘corredor de granos’. Esto permitirá exportar alimentos ucranianos desde tres puertos del Mar Negro durante otros 120 días”, confirmó hoy Kubrakov.\r\n\r\nAdemás, indicó que Ucrania ha apelado oficialmente a las otras partes de la iniciativa para que acepten la oferta para extenderla por al menos otro año e incluir el puerto ucraniano de Mykolaiv. “Estamos esperando su respuesta”, afirmó Kubrakov al respecto.\r\n\r\nEl ministro enfatizó la importancia de garantizar el trabajo efectivo del Centro de Coordinación Conjunta para cumplir con este acuerdo y añadió que Ucrania ha hecho sus propuestas para resolver los problemas existentes.', 'unysml7krmd6eluyga8e');

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
