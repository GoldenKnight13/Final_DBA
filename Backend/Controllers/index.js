const { response } = require('express')
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

    const query = 'SELECT restaurantes.nombre_restaurante, sucursales.direccion, sucursales.telefono FROM restaurantes, sucursales WHERE restaurantes.id_restaurante = sucursales.id_restaurante'
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

//Revisar
const getDemandPerFoodType = async( req,res ) => {
    const query = `
    SELECT r.id_restaurante, nombre_restaurante, tipo_comida, COUNT(p.id_pedido) total
    FROM restaurantes r, sucursales s, pedidos p, contenido_pedido c
    WHERE r.id_restaurante = s.id_restaurante
    AND s.id_sucursal = p.id_sucursal
    AND p.id_pedido = c.id_pedido
    GROUP BY id_restaurante, nombre_restaurante, tipo_comida
    ORDER BY COUNT(p.id_pedido) DESC
    LIMIT 10;`

    db.query( query, (error, result) => {
        if(error){
            console.log(error)
        }
        console.log(result)

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


//Update
//Delete


module.exports = {
    getTables, getColumns, getCount, getData,
    getDistinctValues, getTelephonesAndLocations, getDateRange, 
    getTopSalesRestaurants, getTopSalesFood, getDemandPerFoodType,
    getYearSales
}