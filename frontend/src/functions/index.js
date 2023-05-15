import axios from "axios"
import { server } from "../Config"

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

export const convertToArray = ( object ) => {

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

export const getData = async(table, column) => {
    const response = await axios.get(`${server}/getData`, {
        params:{
            table,
            column
        }
    })

    setTimeout( () => {}, 75)
    const dataArray = convertToArray( response.data )
    return dataArray
}
