import axios from "axios"
import { server } from "../Config"

const convertToArray = ( object ) => {

    const data = []

    object.map( ( array ) => {

        let values = []
        Object.keys( array ).map( (index) => {
            return values.push( array[index] )
        })

        return data.push( values )
    })

    return data
}

const splitArray = ( dataArray ) => {
    const dataArraylen = dataArray.length
    let column1Array = []
    let column2Array = []

    for(let i = 0; i < dataArraylen; i++){
        column1Array.push( dataArray[i][0] )
        column2Array.push( dataArray[i][1] )
    }

    return {column1Array, column2Array}
}

const sortByMonth = ( array ) => {

    const monthsArray1 = [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ]
    const monthsArray2 = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
    let data = []
    
    monthsArray2.map((month, index) => {
        return array.map((tuple) => {
            if( tuple[0] === month){
                return data.push([monthsArray1[index], tuple[1]])
            }
            return undefined
        })
    })

    return data
}

export const getTables = async() => {

    const tablesInfo = await axios.get(`${server}/getTableNames`)

    let tables = []
    tablesInfo.data.map( (object) => {
        return Object.keys(object).map( (index) => {
            return tables.push( object[index] )
        })
    })

    return tables

}

export const getColumns = async( table ) => {
    try {

        const columnsInfo = await axios.get(`${server}/getColumnNames`, {
            params: { table_name: table }
        })

        let columns = ['all']
        const len = columnsInfo.data.length

        for( let i = 0; i < len; i++ ){
            columns.push( columnsInfo.data[i].Field )
        }
    
        return columns

    } catch (error) {
        console.log( error )
    }
}

export const matrixToArray = ( matrix ) => {

    const data = []

    matrix.map( (row) => {
        return row.map( (value) => {
            return data.push( value )
        })
    })

    return data

}

export const getDifferentValues = async( table, field ) => {
    
    const values = await axios.get(`${server}/getDifferentValues`, {
        params: {
            table,
            field
        }
    })
    return matrixToArray( convertToArray( values.data ) )

}

export const getData = async(table, column, objectReturnType ) => {
    const response = await axios.get(`${server}/getData`, {
        params:{
            table,
            column
        }
    })

    setTimeout( () => {}, 75)

    if( objectReturnType ){
        return response.data
    } else {
        return convertToArray( response.data )
    }
}

export const getTelephonesAndLocations = async() => {
    const response = await axios.get(`${server}/getTelephonesAndLocations`)
    const data = response.data

    let actualRestaurant = undefined
    let locationsCounter = 0
    let locationsArray = []
    let telephonesArray = []

    data.map(( tuple ) => {

        if( actualRestaurant !== tuple.nombre_restaurante ){
            actualRestaurant = tuple.nombre_restaurante
            locationsCounter = 0
        }

        if( locationsCounter >= 3){
            return undefined
        } else {
            locationsArray.push( [actualRestaurant ,tuple.codigo_postal, tuple.delegacion] )
            telephonesArray.push( [actualRestaurant ,tuple.telefono] )
            locationsCounter += 1
        }
        return undefined
    }) 
    
    const telephonesAndLocations = {
        locationsArray,
        telephonesArray
    }
    
    return telephonesAndLocations
}

export const getDateRange = async() => {
    const response = await axios.get(`${server}/getDateRange`)
    return  matrixToArray(convertToArray( response.data ))
}

export const getTopSalesRestaurants = async(year) => {
    const response = await axios.get(`${server}/getTopSalesRestaurants`, {
        params:{ year } })
    return splitArray( convertToArray( response.data ) )
}

export const getTopSalesFood = async(year) => {
    const response = await axios.get(`${server}/getTopSalesFood`, {
        params:{ year } })
    return splitArray( convertToArray( response.data ) )
}

export const getDemandPerFoodType = async(year) => {
    const response = await axios.get( `${server}/getDemandPerFoodType`, {
        params: { year }    })
    return splitArray( convertToArray( response.data ) )
}

export const getYearSales = async( restaurant, year ) => {
    const response = await axios.get(`${server}/getYearSales`, {
        params:{
            restaurant,
            year
        }
    })
    return splitArray(  sortByMonth( convertToArray( response.data ) ) )
}

export const getRestaurantDishSales = async( restaurant, year ) => {
    const response = await axios.get(`${server}/getRestaurantDishSales`, {
        params: {
            restaurant,
            year
        }
    })
    return splitArray( convertToArray( response.data ) )
}

export const getDeliveryCount = async( year ) => {
    const response = await axios.get( `${server}/getDeliveryCount`, {
        params: { year }    })
    return splitArray( convertToArray( response.data ) )
}

export const getAverageTicket = async( restaurant, year ) => {
    const response = await axios.get( `${server}/getAverageTicket`, {
        params: { 
            restaurant,
            year 
        }})
    return  convertToArray( response.data )
}

export const getTopLocations = async( restaurant, year ) => {
    const response = await axios.get( `${server}/getTopLocations`, {
        params: { 
            restaurant,
            year 
        }})

    const dataArray = convertToArray( response.data )

    const dataArraylen = dataArray.length
    let column1Array = []
    let column2Array = []

    for(let i = 0; i < dataArraylen; i++){
        column1Array.push( `${dataArray[i][1]} ${dataArray[i][0]}` )
        column2Array.push( dataArray[i][2] )
    }

    return {column1Array, column2Array}


}

export const getGenderVisits = async( restaurant, year ) => {
    const response = await axios.get( `${server}/getGenderInfluence`, {
        params: { 
            restaurant,
            year 
        }})

    return splitArray( convertToArray( response.data ) )
}

export const getVisitsPerRestaurants = async( restaurant, year ) => {
    const response = await axios.get( `${server}/getVisitsPerRestaurants`, {
        params: { 
            restaurant,
            year 
        }})

    return splitArray( convertToArray( response.data ) )
}

export const getAverageAge = async( restaurant, year ) => {
    const response = await axios.get( `${server}/getAverageAge`, {
        params: { 
            restaurant,
            year 
        }})
        
    return matrixToArray( convertToArray( response.data ) )
}

export const getFoodType = async(restaurant) => {
    const response = await axios.get( `${server}/getFoodType`, {
        params: { restaurant } })
    return matrixToArray( convertToArray( response.data ) )
}


