import React, { useEffect, useState } from 'react'
import { DoughnutGraph } from './DoughnutGraph'
import { BarGraph } from './BarGraph'
import { getGenderVisits } from '../functions'

export const GenderVisits = ({restaurant, year, width}) => {

    const[ genders, setGenders ] = useState([])
    const[ visitsPerGender, setVisitsPerGender ] = useState([])

    const init_func = async() => {
        const data = await getGenderVisits( restaurant, year )
        setGenders( data.column1Array )
        setVisitsPerGender( data.column2Array )
    }

    useEffect( ()=> { init_func() }, [ restaurant, year ])

    return (
        <>
            <div className='Platillo mas vendido'>
                <div className='d-flex justify-content-center'>
                    <div className='p-1 mb-0 bg-danger text-white' style={{width}}>

                        <div className='d-flex justify-content-between'>
                            <div className='d-flex justify-content-start p-2'><i>Visitas por genero</i></div> 
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center">
                    <div style={{width: 350}}/>
                    <DoughnutGraph labels={genders} values={visitsPerGender} options={{}}/>
                </div>
            </div>
            <div style={{height: 45}}/>
        </>
    )
}
