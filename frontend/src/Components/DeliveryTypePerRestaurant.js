import React, { useState, useEffect } from 'react'
import { getVisitsPerRestaurants } from '../functions'
import { DoughnutGraph } from './DoughnutGraph'
import { BarGraph } from './BarGraph'

export const DeliveryTypePerRestaurant = ({ restaurant, year, width}) => {

    const[ visits, setVisits ] = useState([])
    const[ deliveryType, setDeliveryType ] = useState([])

    const init_func = async() => {
        const data = await getVisitsPerRestaurants( restaurant, year )
        setDeliveryType( data.column1Array )
        setVisits( data.column2Array )
    }

    useEffect( ()=> { init_func() }, [restaurant, year])

    return (
        <>
            <div className='Platillo mas vendido'>
                <div className='d-flex justify-content-center'>
                    <div className='p-1 mb-0 bg-danger text-white' style={{width}}>

                        <div className='d-flex justify-content-between'>
                            <div className='d-flex justify-content-start p-2'><i>Numero de pedidos</i></div> 
                        </div>
                    </div>
                </div>

                {/* <div className="d-flex justify-content-center">
                    <div style={{width: 350}}/>
                    <DoughnutGraph labels={deliveryType} values={visits} options={{}}/>
                </div>
                <div style={{height: 75}}/> */}
                <div className="d-flex justify-content-center">
                    <BarGraph labels={deliveryType} values={visits} options={{}}/>
                </div>
            </div>
            <div style={{height: 45}}/>
        </>
    )
}
