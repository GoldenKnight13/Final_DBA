import React, { useState, useEffect } from 'react'
import { getTables, getColumns, convertToArray } from '../functions'
import { Picker } from '../Components/Picker'
import axios from 'axios'
import { server } from '../Config'
import { ShowData } from '../Components/ShowData'


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

        setTimeout( () => {}, 75)
        const dataArray = convertToArray( response.data )
        setData( dataArray )
    }

    const showData = () => {
        
    }


    useEffect( () => { initFunction() }, [])
    useEffect( () => { showData() }, [ data ])
    

    return (
        <div>
            <h1> MainPage </h1>
            <div>
                <>{tableNames}</><br/>
                <>{selectedTable}</><br/>
                <>{columnNames}</><br/>
                <>{selectedColumn}</><br/>
            </div>
            <div className='FormatDiv'>
                <form onSubmit={ (e) => { e.preventDefault(); getData() }}>
                    <Picker setValue={ handleTableChange } infoArray={tableNames}/>
                    <Picker setValue={ setSelectedColumn } infoArray={columnNames}/>
                    <button type='submit'>Get data</button>
                </form>
            </div>
            <ShowData data={data}/>
        </div>
    )
}
