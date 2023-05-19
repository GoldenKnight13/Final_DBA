import React, { useState, useEffect }from 'react'
import { BarGraph, DoughnutGraph } from './index'
import { getDemandPerFoodType } from '../functions'

export const DemandPerFoodType = ({year, width}) => {

    const [ labels, setLabels ] = useState([])
    const [ values, setValues ] = useState([])

    const initFunc = async() => {
        const data = await getDemandPerFoodType(year)
        setLabels( data.column1Array )
        setValues( data.column2Array )
    }

    useEffect( ()=>{ initFunc() }, [])
    useEffect( ()=>{ initFunc() }, [year])

    return (
        <>
            <div className='Tipo de comida mas vendida'>
                <div className='d-flex justify-content-center'>
                    <div className='p-1 mb-0 bg-success text-white' style={{width}}>

                        <div className='d-flex justify-content-between'>
                            <div className='d-flex justify-content-start p-2'><i>Tipo de comida más demandado</i></div> 
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div style={{width: 350}}/>
                    <DoughnutGraph labels={labels} values={values} options={{}}/>
                </div>
                <div style={{height: 75}}/>
                <div className="d-flex justify-content-center">
                    <BarGraph labels={labels} values={values} options={{}}/>
                </div>
            </div>
            <div style={{height: 45}}/>
        </>
    )
}
