import React, { useState, useEffect } from 'react'
import { getTables, getColumns, convertToArray } from '../functions'
import { Picker, ShowData, PageSelector } from '../Components/index'
import axios from 'axios'
import { maxTuplesPerPage, server } from '../Config'


export const MainPage = () => {

    //DB structure info
    const [tableNames, setTableNames] = useState([])
    const [columnNames, setColumnNames] = useState([])
    const [maxPageNumber, setMaxPageNumber] = useState(undefined)

    //User selected variables
    const [selectedTable, setSelectedTable] = useState(undefined)
    const [selectedColumn, setSelectedColumn] = useState(undefined)
    const [pageNumber, setPageNumber] = useState(0)
    const [text, setText] = useState(undefined)

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

        getPages( tables[0] )
    }

    const handleTableChange = async( value ) => {

        setSelectedTable(value)
        const columns = await getColumns( value )
        setColumnNames(columns)
        setSelectedColumn( 'all' )
        getPages( value )
    }

    const getPages = async( table ) => {

        const response = await axios.get(`${server}/getCount`, {
            params: { table}
        })
        const dataNumber = convertToArray( response.data )[0][0]
        setMaxPageNumber( Math.ceil( dataNumber / maxTuplesPerPage ) )

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


    useEffect( () => { initFunction() }, [])


    return (
        <div>
            <h1>Main Page</h1>

          {/*   <div>
                <>{tableNames}</><br/>
                <>{selectedTable}</><br/>
                <>{columnNames}</><br/>
                <>{selectedColumn}</><br/>
                <>{text}</><br/>
                <>{maxPageNumber}</><br/>
            </div> */}

            <div className='FormatDiv'>
                <form onSubmit={ (e) => { e.preventDefault(); getData() }}>

                    <Picker setValue={ handleTableChange } infoArray={tableNames}/>
                    <Picker setValue={ setSelectedColumn } infoArray={columnNames}/>

                    <input type='text' placeholder='Enter a text' onChange={ (e) => {
                        e.preventDefault(); setText( e.target.value ) }}/>

                    <button type='submit'>Get data</button>

                </form>
            </div>

            <ShowData data={data}/>
            <PageSelector maxPages={maxPageNumber} changePage={ setPageNumber }/>
        </div>
    )
}
