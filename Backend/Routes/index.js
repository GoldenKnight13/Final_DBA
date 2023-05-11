const express = require('express')
const { getData , insertData, proof, getTables, getColumns } = require('../Controllers')

const router = express.Router()

router.get('/getTableNames', getTables )
router.get('/getColumnNames', getColumns )
router.get('/getData', getData )
router.post('/insertData', insertData )
router.get('/proof', proof)

module.exports = { 
    router
} 