const express = require('express')
const { getData , insertData, proof, getTables, getColumns, getCount } = require('../Controllers')

const router = express.Router()

//GET
router.get('/getTableNames', getTables )
router.get('/getColumnNames', getColumns )
router.get('/getData', getData )
router.get('/getCount', getCount )
router.get('/proof', proof)


//POST
router.put('/insertData', insertData )


//DELETE

//PUT

module.exports = { 
    router
} 