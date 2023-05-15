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

    const query = `SELECT ${selectedColumns} FROM  ${table} LIMIT 20`

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

//Update
//Delete


module.exports = {
    getTables,
    getColumns,
    getCount,
    getData,
    getDistinctValues
}