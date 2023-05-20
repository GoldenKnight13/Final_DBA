import React, { useState, useEffect }from 'react'
import { BarGraph, DoughnutGraph } from './index'
import { getDeliveryCount } from '../functions'

export const DeliveryType = ({year, width}) => {

    const [ deliveryTypes, setDeliveryTypes ] = useState([])
    const [ deliveryCount, setDeliveryCount ] = useState([])

    const init_func = async() => {
        const data = await getDeliveryCount( year )
        setDeliveryTypes( data.column1Array )
        setDeliveryCount( data.column2Array )
    }

    useEffect( ()=>{ init_func() }, [year])

    return (
        <>
             <div className='Tipos de pedidos'>
                <div className='d-flex justify-content-center'>
                    <div className='p-1 mb-0 bg-success text-white' style={{width}}>

                        <div className='d-flex justify-content-between'>
                            <div className='d-flex justify-content-start p-2'><i>Tipos de pedidos</i></div> 
                        </div>
                    </div>
                </div>
                {/* <div className="d-flex justify-content-center">
                    <div style={{width: 350}}/>
                    <DoughnutGraph labels={deliveryTypes} values={deliveryCount} options={{}}/>
                </div>
                <div style={{height: 75}}/> */}
                <div className="d-flex justify-content-center">
                    <BarGraph labels={deliveryTypes} values={deliveryCount} options={{}}/>
                </div>
            </div>
            <div style={{height: 45}}/>
        </>
    )
}
