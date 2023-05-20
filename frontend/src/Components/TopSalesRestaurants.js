import React, { useEffect, useState } from 'react'
import { DoughnutGraph } from './DoughnutGraph'
import { getTopSalesRestaurants } from '../functions'
import { BarGraph } from './BarGraph'

export const TopSalesRestaurants = ({year, width}) => {

    const [ restaurantes, setRestaurantes ] = useState([])
    const [ ventas, setVentas ] = useState([])

    const initFunc = async() => {
        const topSales = await getTopSalesRestaurants(year)
        setRestaurantes( topSales.column1Array )
        setVentas( topSales.column2Array )
    }

    useEffect( ()=> { initFunc() }, [])
    useEffect( ()=> { initFunc() }, [year] )

    return (
        <>
            <div className='Top ventas'>
                <div className='d-flex justify-content-center'>
                    <div className='p-1 mb-0 bg-success text-white' style={{width}}>

                        <div className='d-flex justify-content-between'>
                            <div className='d-flex justify-content-start p-2'><i>Restaurantes con más ventas</i></div> 
                        </div>
                    </div>
                </div>

                {/* <div className="d-flex justify-content-center">
                    <div style={{width: 350}}/>
                    <DoughnutGraph labels={restaurantes} values={ventas} options={{}}/>
                </div>
                <div style={{height: 75}}/> */}
                <div className="d-flex justify-content-center">
                    <BarGraph labels={restaurantes} values={ventas} options={{}}/>
                </div>
            </div>
            <div style={{height: 60}}/>
        </>
    )
}
