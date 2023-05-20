const express = require('express')
const { getData, getTables, getColumns, getCount, getDistinctValues, 
    getTelephonesAndLocations, getDateRange, getTopSalesRestaurants, 
    getTopSalesFood, getDemandPerFoodType, getYearSales, 
    getRestaurantDishSales, getDeliveryCount, getAverageTicket, 
    getTopLocations, getGenderInfluence, getVisitsPerRestaurant, 
    getAverageAge, getFoodType} = require('../Controllers')

const router = express.Router()

//GET
router.get('/getTableNames', getTables )
router.get('/getColumnNames', getColumns )
router.get('/getData', getData )
router.get('/getCount', getCount )
router.get('/getDifferentValues', getDistinctValues)
router.get('/getTelephonesAndLocations', getTelephonesAndLocations)
router.get('/getDateRange', getDateRange)
router.get('/getTopSalesRestaurants', getTopSalesRestaurants)
router.get('/getTopSalesFood', getTopSalesFood)
router.get('/getDemandPerFoodType', getDemandPerFoodType)

router.get('/getYearSales', getYearSales)

router.get('/getRestaurantDishSales', getRestaurantDishSales)
router.get('/getDeliveryCount', getDeliveryCount)
router.get('/getAverageTicket', getAverageTicket)
router.get('/getTopLocations', getTopLocations)
router.get('/getGenderInfluence', getGenderInfluence)
router.get('/getVisitsPerRestaurants', getVisitsPerRestaurant)
router.get('/getAverageAge', getAverageAge)
router.get('/getFoodType', getFoodType)



//POST
//DELETE
//PUT

module.exports = { 
    router
} 