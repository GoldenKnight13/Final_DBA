import React, { useEffect, useState } from 'react'
import { getAverageTicket } from '../functions'

export const AverageTicket = ({restaurant, year, width}) => {

    const [ averageTicket, setAverageTicket ] = useState(undefined)

    const init_func = async() => {
        const data = await getAverageTicket(restaurant, year)
        setAverageTicket( `$ ${data[0]}`)
    }

    useEffect( ()=>{ init_func() }, [restaurant, year])

    return (
        <>
            <div className='Seleccion de restaurante y año'>
                <div className='d-flex justify-content-center'>
                    <div className='p-1 mb-0 bg-danger text-white' style={{width}}>

                        <div className='d-flex justify-content-between'>
                            <div className='d-flex justify-content-start p-2'><i>Ticket promedio</i></div> 
                            <div className='d-flex justify-content-end'>
                                <div className='p-1 mb-0 bg-white text-dark'>
                                    {averageTicket}
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
