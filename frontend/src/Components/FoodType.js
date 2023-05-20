import React, { useState, useEffect } from 'react'
import { getFoodType } from '../functions'

export const FoodType = ({ restaurant, width}) => {

    const [ foodType, setFoodType ] = useState(undefined)

    const init_func = async() => {
        const data = await getFoodType( restaurant )
        setFoodType( data[0] )
    }

    useEffect( ()=>{ init_func() }, [restaurant])

    return (
        <>
            <div className='Seleccion de restaurante y año'>
                <div className='d-flex justify-content-center'>
                    <div className='p-1 mb-0 bg-danger text-white' style={{width}}>

                        <div className='d-flex justify-content-between'>
                            <div className='d-flex justify-content-start p-2'><i>Tipo de comida</i></div> 
                            <div className='d-flex justify-content-end'>
                                <div className='p-1 mb-0 bg-white text-dark'>
                                    {foodType}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>           
            </div>
            <div style={{height: 45}}/> 
        </>
    )
}
