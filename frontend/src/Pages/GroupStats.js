import React from 'react'
import { DoughnutGraph } from '../Components'

export const GroupStats = () => {

    //Style vars
    const width = 600

    const restaurantes = [''] 
    const ventas = [1]

    return (
        <>
            <div style={{height: 45}}/>

            <div className="d-flex justify-content-center">
                <h3>Gruop Stats</h3>
            </div>
            <div style={{height: 45}}/>

            <div className='d-flex justify-content-center'>
                <div className='p-1 mb-0 bg-success text-white' style={{width}}>

                    <div className='d-flex justify-content-between'>
                        <div className='d-flex justify-content-start p-2'><i>Platillo más vendido</i></div> 
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <div style={{width: 400}}/>
                <DoughnutGraph labels={restaurantes} values={ventas} options={{}}/>
            </div>

            <div style={{height: 45}}/>
        </>
    )
}
