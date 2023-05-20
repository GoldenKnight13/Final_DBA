import React, { useState, useEffect } from 'react'
import { getAverageAge } from '../functions'

export const AverageAge = ({ restaurant, year, width }) => {

    const [ averageAge, setAverageAge ] = useState(undefined)

    const init_func = async() => {
        const data = await getAverageAge( restaurant, year )
        setAverageAge( data[0] )
    }

    useEffect( ()=>{ init_func() }, [restaurant, year])

    return (
        <>
            <div className='Seleccion de restaurante y año'>
                <div className='d-flex justify-content-center'>
                    <div className='p-1 mb-0 bg-danger text-white' style={{width}}>

                        <div className='d-flex justify-content-between'>
                            <div className='d-flex justify-content-start p-2'><i>Edad promedio</i></div> 
                            <div className='d-flex justify-content-end'>
                                <div className='p-1 mb-0 bg-white text-dark'>
                                    {averageAge}
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
