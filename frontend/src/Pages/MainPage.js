import React, { useState, useEffect } from 'react'
import { getTables, getColumns, convertToArray } from '../functions'
import { Picker } from '../Components/Picker'
import axios from 'axios'
import { server } from '../Config'



export const MainPage = () => {

    //DB structure info
    const [tableNames, setTableNames] = useState([])
    const [columnNames, setColumnNames] = useState([])

    //User selected variables
    const [selectedTable, setSelectedTable] = useState(undefined)
    const [selectedColumn, setSelectedColumn] = useState(undefined)
    const [pageNumber, setPageNumber] = useState(0)

    //DB data
    const [data, setData] = useState([])
    const [shownData, setShownData] = useState([])
    

    const initFunction = async () =>{

        //Getting database structure
        const tables = await getTables()
        setTableNames( tables )
        const columns = await getColumns( tables[0] )
        setColumnNames( columns)  

        setTimeout( ()=>{}, 50 )

        //Default selection
        setSelectedTable( tables[0] )
        setSelectedColumn( 'all' )

        setTimeout( ()=>{}, 50 )
    }

    const handleTableChange = async( value ) => {

        setSelectedTable(value)
        const columns = await getColumns( value )
        setColumnNames(columns)
        setSelectedColumn( 'all' )
    }

    const getData = async() => {
        const response = await axios.get(`${server}/getData`, {
            params:{
                table: selectedTable,
                column: selectedColumn,
                page: pageNumber
            }
        })

        setData( convertToArray( response.data ) )
    }


    useEffect( () => { initFunction() }, [])
    

    return (
        <div>
            <h1> MainPage </h1>
            <div>
                <>{tableNames}</><br/>
                <>{selectedTable}</><br/>
                <>{columnNames}</><br/>
                <>{selectedColumn}</><br/>
            </div>
            <div>
                <form>
                    <Picker setValue={ handleTableChange } infoArray={tableNames}/>
                    <Picker setValue={ setSelectedColumn } infoArray={columnNames}/>
                </form>
                <button onClick={ getData }>Get data</button>
            </div>
            <div>
                <>{data}</>
            </div>
        </div>
    )
}
