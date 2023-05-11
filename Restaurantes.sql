-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 08-05-2023 a las 20:47:47
-- Versión del servidor: 5.7.39
-- Versión de PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `Restaurantes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comida`
--

CREATE TABLE `comida` (
  `id_comida` int(11) NOT NULL,
  `id_restaurante` int(11) NOT NULL,
  `id_tipo_comida` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `disponible` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `comida`
--

INSERT INTO `comida` (`id_comida`, `id_restaurante`, `id_tipo_comida`, `nombre`, `descripcion`, `precio`, `disponible`) VALUES
(0, 2, 0, 'event', 'Whom across help.', '14.30', 1),
(1, 9, 2, 'dream', 'Read big reflect television.', '27.83', 0),
(2, 1, 0, 'seem', 'American support race south wrong.', '10.09', 0),
(3, 6, 2, 'economic', 'Technology place hope somebody activity it detail.', '20.66', 0),
(4, 0, 2, 'guy', 'Brother high blue.', '18.77', 1),
(5, 8, 4, 'not', 'Suddenly second fish letter.', '24.51', 1),
(6, 4, 4, 'affect', 'Exactly laugh door daughter.', '14.10', 0),
(7, 3, 3, 'happen', 'Once cover public night.', '16.24', 1),
(8, 9, 1, 'risk', 'Traditional special Mrs gun almost Republican source.', '9.46', 0),
(9, 5, 4, 'local', 'Act work or every you century expert.', '12.62', 0),
(10, 1, 1, 'past', 'Serve power past record soon can scene.', '13.50', 1),
(11, 1, 0, 'large', 'Long reality four from avoid two.', '17.66', 0),
(12, 0, 3, 'perhaps', 'Full quite left owner design.', '14.94', 0),
(13, 6, 0, 'play', 'These care indicate approach summer offer.', '6.31', 0),
(14, 9, 2, 'form', 'Design result idea bag issue.', '20.45', 0),
(15, 0, 4, 'wonder', 'Hospital sport animal PM free.', '24.93', 1),
(16, 4, 2, 'site', 'Your model station west.', '17.27', 1),
(17, 7, 0, 'suffer', 'Marriage simply should huge age very consumer woman.', '6.45', 0),
(18, 4, 3, 'its', 'End break mission study here live.', '17.22', 0),
(19, 1, 2, 'job', 'Condition paper move building value require war.', '29.24', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `menu`
--

CREATE TABLE `menu` (
  `id_menu` int(11) NOT NULL,
  `id_restaurante` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text,
  `precio` decimal(6,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `menu`
--

INSERT INTO `menu` (`id_menu`, `id_restaurante`, `nombre`, `descripcion`, `precio`) VALUES
(1, 6, 'themselves', 'Than popular free system.', '19.11'),
(2, 7, 'compare', 'Political structure system compare under rest lead.', '46.23'),
(3, 1, 'itself', 'Thought room wonder Congress term.', '10.32'),
(4, 7, 'per', 'Ahead expect collection.', '36.76'),
(5, 5, 'not', 'Sister a continue away.', '19.43'),
(6, 4, 'citizen', 'A behind growth class skin skill television early.', '16.15'),
(7, 7, 'fast', 'Republican development board might art south operation.', '30.91'),
(8, 0, 'improve', 'Push reflect opportunity investment nor among establish.', '21.00'),
(9, 5, 'increase', 'Seat figure picture however store exist.', '31.34'),
(10, 6, 'newspaper', 'Agreement yet concern tax central fall.', '40.31');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `restaurantes`
--

CREATE TABLE `restaurantes` (
  `id_restaurante` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `telefono` varchar(30) NOT NULL,
  `sitio_web` varchar(255) NOT NULL,
  `estrellas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `restaurantes`
--

INSERT INTO `restaurantes` (`id_restaurante`, `nombre`, `direccion`, `telefono`, `sitio_web`, `estrellas`) VALUES
(0, 'Allen, Castillo and Ramos', '995 Perez Knolls\nDuaneview, ID 84772', '+1-860-858-4839x9462', 'https://www.johnson-sanchez.com/', 4),
(1, 'Quinn, Thompson and Yoder', '3824 Johnson Alley\nPort Bridget, MO 42581', '+1-384-725-5320x39027', 'http://www.ritter.info/', 5),
(2, 'Buckley-Woodward', '787 Wade Park\nKyleton, PW 89886', '+1-628-099-0000x836', 'http://lin-brown.com/', 2),
(3, 'Trujillo-Hill', '4912 Sally Island Suite 858\nJohnsonburgh, GA 08110', '001-928-093-3288', 'http://guzman.com/', 2),
(4, 'Cobb-Dawson', '3124 Valerie Field Apt. 297\nTriciatown, RI 85017', '(730)985-8363', 'https://www.kirk.com/', 2),
(5, 'Hall-Smith', '131 Richard Heights Apt. 887\nPort Kevin, WA 72196', '963.481.5984x973', 'https://martin.com/', 1),
(6, 'Diaz-Butler', '0108 Bell Flat\nCynthiatown, KS 78005', '(835)855-0063x0034', 'http://www.gilbert.com/', 1),
(7, 'Gibbs-Moran', '505 Carolyn Drives\nPort Jeffery, IA 73177', '0552058363', 'https://sims.com/', 4),
(8, 'Johnson-Andrews', '7519 Shelly Loaf Apt. 981\nPort Jason, NV 31160', '6406071166', 'http://www.fox-black.com/', 4),
(9, 'Frazier and Sons', '578 April Fort Apt. 766\nNew Jessica, WA 65835', '+1-128-299-6228', 'http://www.hart-white.biz/', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `restaurante_tipo_comida`
--

CREATE TABLE `restaurante_tipo_comida` (
  `id_restaurante` int(11) NOT NULL,
  `id_tipo_comida` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `restaurante_tipo_comida`
--

INSERT INTO `restaurante_tipo_comida` (`id_restaurante`, `id_tipo_comida`) VALUES
(0, 0),
(4, 0),
(5, 0),
(6, 0),
(8, 0),
(9, 0),
(0, 1),
(2, 1),
(7, 1),
(8, 1),
(9, 1),
(1, 2),
(3, 2),
(5, 2),
(1, 3),
(2, 3),
(6, 3),
(3, 4),
(4, 4),
(7, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sucursales`
--

CREATE TABLE `sucursales` (
  `id_sucursal` int(11) NOT NULL,
  `id_restaurante` int(11) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `latitud` float(10,6) NOT NULL,
  `longitud` float(10,6) NOT NULL,
  `horarios` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `sucursales`
--

INSERT INTO `sucursales` (`id_sucursal`, `id_restaurante`, `direccion`, `latitud`, `longitud`, `horarios`) VALUES
(0, 8, '110 Matthews River\nSanchezfurt, TX 65772', 27.410147, -136.483719, '13:38:30'),
(1, 8, '91834 Wallace Fork\nLake Elizabethside, PW 49556', 42.804379, 25.281670, '09:43:24'),
(2, 1, '308 Kyle Plaza Apt. 290\nCarolshire, AS 21144', -46.149612, 40.247368, '00:55:08'),
(3, 3, '8739 Ramos Vista Suite 304\nSmithbury, PA 22975', 0.894103, 109.805580, '03:37:08'),
(4, 1, '81067 Erin Circles Apt. 166\nLake Megan, OH 04549', 61.075260, 16.673107, '06:14:10'),
(5, 7, '9447 Jonathan Run\nColleenland, NC 19676', -3.925066, -83.459007, '15:51:19'),
(6, 4, '98189 Ashley Creek Suite 333\nSouth Crystalton, NY 98354', 88.845322, -110.677620, '13:24:20'),
(7, 5, '288 Dawn Hollow Suite 354\nSouth Thomas, NC 39057', 77.117325, 9.532249, '00:16:11'),
(8, 0, '295 Williams Spur Suite 846\nWest Noahberg, ME 06542', -20.403564, -74.665871, '08:23:50'),
(9, 5, '1406 Reese Land\nSydneychester, UT 14851', 8.371810, 143.679092, '10:40:08');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_comida`
--

CREATE TABLE `tipo_comida` (
  `id_tipo_comida` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tipo_comida`
--

INSERT INTO `tipo_comida` (`id_tipo_comida`, `nombre`) VALUES
(0, 'house'),
(1, 'moment'),
(2, 'wall'),
(3, 'shoulder'),
(4, 'politics');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comida`
--
ALTER TABLE `comida`
  ADD PRIMARY KEY (`id_comida`),
  ADD KEY `id_restaurante` (`id_restaurante`),
  ADD KEY `id_tipo_comida` (`id_tipo_comida`);

--
-- Indices de la tabla `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id_menu`),
  ADD KEY `id_restaurante` (`id_restaurante`);

--
-- Indices de la tabla `restaurantes`
--
ALTER TABLE `restaurantes`
  ADD PRIMARY KEY (`id_restaurante`);

--
-- Indices de la tabla `restaurante_tipo_comida`
--
ALTER TABLE `restaurante_tipo_comida`
  ADD PRIMARY KEY (`id_restaurante`,`id_tipo_comida`),
  ADD KEY `id_tipo_comida` (`id_tipo_comida`);

--
-- Indices de la tabla `sucursales`
--
ALTER TABLE `sucursales`
  ADD PRIMARY KEY (`id_sucursal`),
  ADD KEY `id_restaurante` (`id_restaurante`);

--
-- Indices de la tabla `tipo_comida`
--
ALTER TABLE `tipo_comida`
  ADD PRIMARY KEY (`id_tipo_comida`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `menu`
--
ALTER TABLE `menu`
  MODIFY `id_menu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comida`
--
ALTER TABLE `comida`
  ADD CONSTRAINT `comida_ibfk_1` FOREIGN KEY (`id_restaurante`) REFERENCES `restaurantes` (`id_restaurante`),
  ADD CONSTRAINT `comida_ibfk_2` FOREIGN KEY (`id_tipo_comida`) REFERENCES `tipo_comida` (`id_tipo_comida`);

--
-- Filtros para la tabla `menu`
--
ALTER TABLE `menu`
  ADD CONSTRAINT `menu_ibfk_1` FOREIGN KEY (`id_restaurante`) REFERENCES `restaurantes` (`id_restaurante`);

--
-- Filtros para la tabla `restaurante_tipo_comida`
--
ALTER TABLE `restaurante_tipo_comida`
  ADD CONSTRAINT `restaurante_tipo_comida_ibfk_1` FOREIGN KEY (`id_restaurante`) REFERENCES `restaurantes` (`id_restaurante`),
  ADD CONSTRAINT `restaurante_tipo_comida_ibfk_2` FOREIGN KEY (`id_tipo_comida`) REFERENCES `tipo_comida` (`id_tipo_comida`);

--
-- Filtros para la tabla `sucursales`
--
ALTER TABLE `sucursales`
  ADD CONSTRAINT `sucursales_ibfk_1` FOREIGN KEY (`id_restaurante`) REFERENCES `restaurantes` (`id_restaurante`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
