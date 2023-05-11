const { db } = require('../config')

//Create
const insertData = async (req, res) => {

    const { name, age, mail, phone } = req.body

    db.query( 'INSERT INTO test VALUES(?,?,?,?)', [name, age, mail, phone], (error, result) => {

        if(error){
            console.log(error)
        }

        res.send(result)

    })

}

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

    try {
        
    } catch (error) {
        console.log(error)
    }
}

const getData = async (req, res) => {

    const { table, column, page } = req.query
    const selectedColumns = (column === 'all') ? '*' : column
    const selectedpage = ( Number(page) === 0) ? '' : ` LIMIT ${page * 10}, 10`

    const query = `SELECT ${selectedColumns} FROM  ${table}${selectedpage}`

    db.query( query, (error, result) => {
        if(error){
            console.log(error)
        }
        res.send( result )
    })
}

//Update
//Delete
const proof = async(req, res) => {

}


module.exports = {
    getTables,
    getColumns,
    getData, 
    insertData,
    proof
}