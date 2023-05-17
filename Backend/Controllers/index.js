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

    const query = 'SELECT MIN( fecha_visita ) inicio, MAX( fecha_visita ) fin FROM visitas'
    db.query( query, (error, result) => {
        if(error){
            console.log(error)
        }
        res.send(result)
    })

}

const proof = async(req,res) => {
    
    console.log( req.query )
    const query = 'SELECT * FROM pedidos, restaurantes LIMIT 30'
    db.query(query, (error, result) => {
        if(error){
            console.log(error)
        }
        res.send(result)
    })
}

//Update
//Delete


module.exports = {
    getTables,
    getColumns,
    getCount,
    getData,
    getDistinctValues,
    getTelephonesAndLocations,
    getDateRange,
    proof
}