const express = require('express')
const { getData, getTables, getColumns, getCount, getDistinctValues } = require('../Controllers')

const router = express.Router()

//GET
router.get('/getTableNames', getTables )
router.get('/getColumnNames', getColumns )
router.get('/getData', getData )
router.get('/getCount', getCount )
router.get('/getDifferentValues', getDistinctValues)


//POST
//DELETE
//PUT

module.exports = { 
    router
} 