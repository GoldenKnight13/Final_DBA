import React, { useEffect, useState } from 'react'
import { DoughnutGraph } from './DoughnutGraph'
import { getRestaurantDishSales } from '../functions'
import { BarGraph } from './BarGraph'

export const DishSales = ({restaurant,year,width}) => {

    const [ dishes, setDishes ] = useState([])
    const [ sales, setSales ] = useState([])

    const options = {}

    const initfunc = async() => {
        const graph = await getRestaurantDishSales( restaurant, year )
        setDishes( graph.column1Array )
        setSales( graph.column2Array )
    }

    useEffect( ()=>{ initfunc() }, [restaurant, year])

    return (
        <>
            <div className='Platillo mas vendido'>
                <div className='d-flex justify-content-center'>
                    <div className='p-1 mb-0 bg-danger text-white' style={{width}}>

                        <div className='d-flex justify-content-between'>
                            <div className='d-flex justify-content-start p-2'><i>Platillo más vendido</i></div> 
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center">
                    <div style={{width: 350}}/>
                    <DoughnutGraph labels={dishes} values={sales} options={options}/>
                </div>
                <div style={{height:75}}/>
                <div className="d-flex justify-content-center">
                    <BarGraph labels={dishes} values={sales} options={options}/>
                </div>
            </div>
            <div style={{height: 45}}/>
        </>
    )
}
