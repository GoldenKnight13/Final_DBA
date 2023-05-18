import React, { useState, useEffect }from 'react'
import { BarGraph, DoughnutGraph } from './index'
import { getDemandPerFoodType } from '../functions'

export const DemandPerFoodType = ({width}) => {

    const initFunc = async() => {
        await getDemandPerFoodType()
    }

    useEffect( ()=>{ initFunc() }, [])

    return (
        <>
            <div className='Tipo de comida mas vendida'>
                <div className='d-flex justify-content-center'>
                    <div className='p-1 mb-0 bg-success text-white' style={{width}}>

                        <div className='d-flex justify-content-between'>
                            <div className='d-flex justify-content-start p-2'><i>Tipo de comida más vendido</i></div> 
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div style={{width: 350}}/>
                    <DoughnutGraph labels={[]} values={[]} options={{}}/>
                </div>
                <div style={{height: 75}}/>
                <div className="d-flex justify-content-center">
                    <BarGraph labels={[]} values={[]} options={{}}/>
                </div>
            </div>
            <div style={{height: 45}}/>
        </>
    )
}
