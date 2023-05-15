import React from 'react'
import { CollapseTable } from '../Components'

export const Playground = () => {

    const width = 600
    const data = [
        ['Alan', 1, 'Hola'],
        ['Diego', 2, 'Adios']
    ]

    return (

        <>
            <div style={{height: 70}}/>
            <div className="d-flex justify-content-center">
                <h2>Nuestros restaurantes</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div>
                    <div style={{height: 20}}/>
                    <CollapseTable data={data} width={width}/>
                </div>
            </div>
        </>
    )
}
