const { db } = require('../config')

//Create


//Read
const getTables = async( req, res ) => {  

    const query = "SHOW TABLES"

    db.query( query, (error, result) => {
        if(error){
            console.log(error)
        }   
        res.send(result)
    })
}

const getColumns = async ( req, res ) => {
 
    const query = `SHOW COLUMNS FROM ${ req.query.table_name }`

    db.query( query, (error, result) => {

        if(error){
            console.log(error)
        }
        res.send(result)

    })
}

const getCount = async (req, res) => {

    const query = `SELECT COUNT(*) FROM ${ req.query.table }`
    db.query( query, (error, result) => {
        if(error){
            console.log(error)
        }
        res.send( result )
    })
}

const getData = async (req, res) => {

    const { table, column } = req.query
    const selectedColumns = (column === 'all') ? '*' : column

    const query = `SELECT ${selectedColumns} FROM  ${table}`

    db.query( query, (error, result) => {
        if(error){
            console.log(error)
        }
        res.send( result )
    })
}

const getDistinctValues = async(req, res) => {

    const {table, field } = req.query
    const column = (field === 'all') ? '*' : field
    const query = `SELECT DISTINCT ${column} FROM ${table}`

    db.query( query, (error, result) => {
        if(error){
            console.log(error)
        }
        res.send( result )
    })
}

const getTelephonesAndLocations = async(req, res) => {

    const query = 'SELECT restaurantes.nombre_restaurante, sucursales.codigo_postal, sucursales.delegacion, sucursales.telefono FROM restaurantes, sucursales WHERE restaurantes.id_restaurante = sucursales.id_restaurante'
    db.query(query, (error, result) => {
        if(error){
            console.log(error)
        }
        res.send(result)
    })
}

const getDateRange = async(req, res) => {

    const query = 'SELECT MIN(fecha_pedido), MAX(fecha_pedido) FROM pedidos;'
    db.query( query, (error, result) => {
        if(error){
            console.log(error)
        }
        res.send(result)
    })

}

const getTopSalesRestaurants = async(req, res) => {

    const { year } = req.query

    const query = `SELECT r.id_restaurante, nombre_restaurante, tipo_comida, SUM(precio) total_ventas
    FROM restaurantes r, sucursales s, pedidos p, contenido_pedido c
    WHERE r.id_restaurante = s.id_restaurante
    AND s.id_sucursal = p.id_sucursal
    AND p.id_pedido = c.id_pedido
    AND EXTRACT(YEAR FROM fecha_pedido) = '${year}'
    GROUP BY id_restaurante, nombre_restaurante, tipo_comida
    ORDER BY SUM(precio) DESC
    LIMIT 10;`

    db.query( query, (error, result) => {
        if(error){
            console.log(error)
        }

        const len = result.length
        for( let i =0; i < len; i++){
            delete result[i].id_restaurante
            delete result[i].tipo_comida
        }
        res.send(result)
    })

}

const getTopSalesFood = async(req, res) => {

    const { year } = req.query

    const query = `SELECT I.tipo_comida, SUM(Total) total
    FROM (SELECT r.id_restaurante, nombre_restaurante, tipo_comida, SUM(precio) as Total
          FROM restaurantes r, sucursales s, pedidos p, contenido_pedido c
          WHERE r.id_restaurante = s.id_restaurante
          AND s.id_sucursal = p.id_sucursal
          AND p.id_pedido = c.id_pedido
          AND EXTRACT(YEAR FROM fecha_pedido) = '${year}'
          GROUP BY id_restaurante, nombre_restaurante, tipo_comida
          ORDER BY SUM(precio)) I
    GROUP BY I.tipo_comida
    ORDER BY SUM(TOTAL) DESC
    LIMIT 10;`

    db.query( query, (error, result) => {
        if(error){
            console.log( error )
        }
        res.send( result )
    })

}

const getDemandPerFoodType = async( req,res ) => {

    const { year } = req.query

    const query = `
    SELECT I.tipo_comida, SUM(Total) cantidad
    FROM (SELECT r.id_restaurante, nombre_restaurante, tipo_comida, COUNT(p.id_pedido) as Total
        FROM restaurantes r, sucursales s, pedidos p, contenido_pedido c
        WHERE r.id_restaurante = s.id_restaurante
        AND s.id_sucursal = p.id_sucursal
        AND p.id_pedido = c.id_pedido
        AND EXTRACT(YEAR FROM fecha_pedido) = '${year}'
        GROUP BY id_restaurante, nombre_restaurante, tipo_comida
        ORDER BY COUNT(p.id_pedido)) I
    GROUP BY I.tipo_comida
    ORDER BY SUM(Total) DESC
    LIMIT 10;`

    db.query( query, (error, result) => {
        if(error){
            console.log(error)
        }

        const len = result.length
        for( let i =0; i < len; i++){
            delete result[i].id_restaurante
            delete result[i].nombre_restaurante
        }

        res.send( result )
    })
}

const getYearSales = async(req,res) => {

    const { restaurant, year } = req.query

    const query = `SELECT nombre_restaurante, MONTHNAME(fecha_pedido) AS MES, EXTRACT(YEAR FROM fecha_pedido) year, SUM(precio) total
    FROM restaurantes r, sucursales s, pedidos p, contenido_pedido c
    WHERE r.id_restaurante = s.id_restaurante
    AND s.id_sucursal = p.id_sucursal
    AND p.id_pedido = c.id_pedido
    AND r.nombre_restaurante = '${restaurant}'
    AND EXTRACT(YEAR FROM fecha_pedido) = '${year}'
    GROUP BY MONTHNAME(fecha_pedido), year
    ORDER BY SUM(precio) DESC
    LIMIT 10`

    db.query( query, (error, result) => {
        if(error){
            console.log(error)
        }

        const len = result.length
        for(let i = 0; i < len; i++){
            delete result[i].nombre_restaurante
            delete result[i].year
        }
        res.send(result)
    })

}

const getRestaurantDishSales = async(req,res) => {

    const { restaurant, year } = req.query

    const query = `SELECT nombre_platillo, SUM(p.precio) ventas
        FROM restaurantes r, platillos p, contenido_pedido c, pedidos
        WHERE r.id_restaurante = p.id_restaurante
        AND p.id_platillo = c.id_platillo
        AND r.nombre_restaurante = '${restaurant}'
        AND EXTRACT(YEAR FROM pedidos.fecha_pedido) = '${year}'
        GROUP BY nombre_platillo
        ORDER BY SUM(p.precio) DESC
        LIMIT  5;`

    db.query( query, (error, result) => {
        if(error){
            console.log(error)
        }
        res.send(result)
    })
}

const getDeliveryCount = async( req,res ) => {

    const { year } = req.query

    const query = `
    SELECT tipo_pedido, COUNT(tipo_pedido)
    FROM pedidos
    WHERE EXTRACT(YEAR FROM pedidos.fecha_pedido) = '${year}'
    GROUP BY (tipo_pedido)
    ORDER BY COUNT(tipo_pedido) DESC;`

    db.query( query, (error, result) => {
        if(error){
            console.log(error)
        }

        res.send( result )
    })
}

const getAverageTicket = async(req, res) => {

    const { restaurant, year } = req.query

    const query = `SELECT K.nombre_restaurante, ROUND(SUM(K.sumas)/COUNT(*),2) AS ticket_promedio
    FROM (SELECT nombre_restaurante, p.id_pedido, SUM(precio) as sumas
          FROM restaurantes r, sucursales s, pedidos p, contenido_pedido c 
          WHERE r.id_restaurante = s.id_restaurante
          AND s.id_sucursal = p.id_sucursal
          AND p.id_pedido = c.id_pedido
          AND r.nombre_restaurante = '${restaurant}'
          AND EXTRACT(YEAR FROM p.fecha_pedido) = '${year}'
          GROUP BY p.id_pedido
          ORDER BY SUM(precio)) K
    GROUP BY nombre_restaurante;`

    db.query( query, (error, result) => {
        if(error){
            console.log(error)
        }
        const len = result.length
        for( let i= 0; i <len; i++){
            delete result[i].nombre_restaurante
        }

        res.send(result)
    })
}

const getTopLocations = async(req, res) => {

    const { restaurant, year } = req.query

    const query = `SELECT  s.codigo_postal, s.delegacion, SUM(precio) total
    FROM restaurantes r, sucursales s, pedidos p, contenido_pedido c
    WHERE r.id_restaurante = s.id_restaurante
    AND s.id_sucursal = p.id_sucursal
    AND p.id_pedido = c.id_pedido
    AND r.nombre_restaurante = '${restaurant}'
    AND EXTRACT(YEAR FROM p.fecha_pedido) = '${year}'
    GROUP BY s.id_sucursal
    ORDER BY SUM(precio) DESC
    LIMIT 5;`

    db.query( query, (error, result) => {
        if(error){
            console.log(error)
        }
        res.send(result)
    })
}

const getGenderInfluence = async(req, res) => {

    const { restaurant, year } = req.query

    const query = `SELECT c.sexo, COUNT(sexo)
    FROM restaurantes r, sucursales s, pedidos p, clientes c
    WHERE r.id_restaurante = s.id_restaurante
    AND s.id_sucursal = p.id_sucursal
    AND p.id_cliente = c.id_cliente
    AND r.nombre_restaurante = '${restaurant}'
    AND EXTRACT(YEAR FROM p.fecha_pedido) = '${year}'
    GROUP BY sexo
    ORDER BY COUNT(sexo) DESC;
    `

    db.query( query, (error, result) => {
        if(error){
            console.log(error)
        }
        res.send(result)
    })
}

const getVisitsPerRestaurant = async(req, res) => {

    const { restaurant, year } = req.query

    const query = `SELECT  tipo_pedido, COUNT(tipo_pedido)
    FROM restaurantes r, pedidos p, sucursales s
    WHERE r.id_restaurante = s.id_restaurante
    AND s.id_sucursal = p.id_sucursal
    AND r.nombre_restaurante = '${restaurant}'
    AND EXTRACT(YEAR FROM p.fecha_pedido) = '${year}'
    GROUP BY (tipo_pedido)
    ORDER BY COUNT(tipo_pedido) DESC;`

    db.query( query, (error, result) => {
        if(error){
            console.log(error)
        }
        res.send(result)
    })
}

const getAverageAge = async(req, res) => {

    const { restaurant, year } = req.query

    const query = ` SELECT nombre_restaurante, ROUND(SUM(Año)/COUNT(*), 0) edad
    FROM (SELECT nombre_restaurante, nombre_cliente, ROUND(DATEDIFF('2023-05-29', fecha_nacimiento)/365, 0) AS Año
          FROM restaurantes r, sucursales s, pedidos p, clientes c 
          WHERE r.id_restaurante = s.id_restaurante
          AND s.id_sucursal = p.id_sucursal
          AND p.id_cliente = c.id_cliente
          AND r.id_restaurante = 1
          AND EXTRACT(YEAR FROM fecha_pedido) = 2022) K
    GROUP BY nombre_restaurante;`

    db.query( query, (error, result) => {
        if(error){
            console.log(error)
        }
        delete result[0].nombre_restaurante
        res.send(result)
    })

}

const getFoodType = async(req, res) => {
    const {restaurant} = req.query
    const query = `SELECT tipo_comida FROM restaurantes WHERE restaurantes.nombre_restaurante='${restaurant}'`
    db.query( query, (error, result) => {
        if(error){
            console.log(error)
        }
        res.send(result)
    })
}

//Update
//Delete


module.exports = {
    getTables, getColumns, getCount, getData,
    getDistinctValues, getTelephonesAndLocations, getDateRange, 
    getTopSalesRestaurants, getTopSalesFood, getDemandPerFoodType,
    getYearSales, getRestaurantDishSales, getDeliveryCount,
    getAverageTicket, getTopLocations, getGenderInfluence,
    getVisitsPerRestaurant, getAverageAge, getFoodType
}