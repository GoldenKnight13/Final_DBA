import React, { useEffect, useState } from 'react'
import { BarGraph } from './BarGraph'
import { getTopLocations } from '../functions'

export const TopLocations = ({restaurant, year, width}) => {

    const [ locations, setLocations ] = useState([])
    const [ sales, setSales ] = useState([])

    const init_func = async() => {
        const data = await getTopLocations( restaurant, year )
        setLocations( data.column1Array )
        setSales( data.column2Array )
    }

    useEffect( ()=> { init_func() }, [restaurant, year])

    return (
        <>
            <div className='Ventas anuales'>
                <div className="d-flex justify-content-center">
                    <div>
                        <div className='p-1 mb-0 bg-danger text-white' style={{width}}>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex justify-content-start p-2'><i>Mejores sucursales</i></div> 
                                </div>
                            </div>

                        <div className="d-flex justify-content-center">
                            <BarGraph labels={locations} values={sales} options={{}}/>
                        </div>

                    </div>
                </div>
            </div>
            <div style={{height: 45}}/>
        </>
    )
}
