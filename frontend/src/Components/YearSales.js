import React, { useState, useEffect } from 'react'
import { LineGraph } from './LineGraph'
import { getYearSales } from '../functions'

export const YearSales = ({restaurant, year, width}) => {

    
    const [ months, setMonths ] = useState([])
    const [ sales, setSales ] = useState([])

    const options = {}

    const initFunc = async() => {
        const graph1 = await getYearSales( restaurant, year)
        setMonths( graph1.column1Array )
        setSales( graph1.column2Array )
    }

    useEffect( ()=>{ initFunc() }, [restaurant, year])

    return (
        <>
            <div className='Ventas anuales'>
                <div className="d-flex justify-content-center">
                    <div>
                        <div className='p-1 mb-0 bg-danger text-white' style={{width}}>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex justify-content-start p-2'><i>Ventas anuales</i></div> 
                                </div>
                            </div>

                        <div className="d-flex justify-content-center">
                            <LineGraph labels={months} values={sales} options={options}/>
                        </div>

                    </div>
                </div>
            </div>
            <div style={{height: 45}}/>
        </>
    )
}
