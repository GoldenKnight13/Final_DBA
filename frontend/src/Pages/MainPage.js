import React, { useState, useEffect } from 'react'
import { getTables, getColumns, convertToArray, getDifferentValues } from '../functions'
import { Picker, ShowData } from '../Components/index'
import axios from 'axios'
import { server } from '../Config'


export const MainPage = () => {

    //DB structure info
    const [tableNames, setTableNames] = useState([])
    const [columnNames, setColumnNames] = useState([])

    //User selected variables
    const [selectedTable, setSelectedTable] = useState(undefined)
    const [selectedColumn, setSelectedColumn] = useState(undefined)
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
                column: selectedColumn
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
            <>{text}</>
            <div className='FormatDiv'>
                <form onSubmit={ (e) => { e.preventDefault(); getData() }}>

                    <Picker setValue={ handleTableChange } infoArray={tableNames}/>
                    <Picker setValue={ setSelectedColumn } infoArray={columnNames}/>

                    <input type='text' placeholder='Enter a text' onChange={ (e) => {
                        e.preventDefault(); setText( e.target.value ) }}/>

                    <button type='submit'>Get data</button>

                </form>
            </div>
            <button onClick={async() => { console.log( await getDifferentValues(selectedTable, selectedColumn) ) }}>Get Different Values</button>
            <ShowData data={data}/>
        </div>
    )
}
