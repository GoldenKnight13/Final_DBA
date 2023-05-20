import React, { useEffect, useState } from 'react'
import { DoughnutGraph, BarGraph } from './index'
import { getTopSalesFood } from '../functions'

export const TopFoodType = ({year, width}) => {

    const [ foodType, setFoodType ] = useState([])
    const [ sales, setSales ] = useState([])

    const initFunc = async() =>{
        const data = await getTopSalesFood(year)
        setFoodType( data.column1Array )
        setSales( data.column2Array )
    }

    useEffect( ()=> { initFunc() }, [])
    useEffect( ()=> { initFunc() }, [year] )

    return (
        <>
            <div className='Tipo de comida mas vendida'>
                <div className='d-flex justify-content-center'>
                    <div className='p-1 mb-0 bg-success text-white' style={{width}}>

                        <div className='d-flex justify-content-between'>
                            <div className='d-flex justify-content-start p-2'><i>Tipo de comida más vendido ($)</i></div> 
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div style={{width:550}}/>
                    <DoughnutGraph labels={foodType} values={sales} options={{}}/>
                    <div className="d-flex align-items-center">
                        <BarGraph labels={foodType} values={sales} options={{}}/>
                    </div> 
                    <div style={{width:550}}/>
                </div>
                {/* <div style={{height: 75}}/>
                <div className="d-flex justify-content-center">
                    <BarGraph labels={foodType} values={sales} options={{}}/>
                </div> */}
            </div>
            <div style={{height: 45}}/>
        </>
    )
}
