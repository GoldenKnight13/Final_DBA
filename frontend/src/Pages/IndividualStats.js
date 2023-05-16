import React, { useEffect, useState } from 'react'
import { getData, getDateRange, matrixToArray } from '../functions'
import { LineGraph, Picker } from '../Components'

export const IndividualStats = () => {
    
    //DB structure
    const [ minDate, setMinDate ] = useState(undefined)
    const [ maxDate, setMaxDate ] = useState(undefined)
    const [restaurantes, setRestaurantes ] = useState([])
    const [yearsArray, setYearsArray] = useState([])

    //User variables
    const [selectedRestaurant, setSelectedRestaurant] = useState(undefined)
    const [selectedYear, setSelectedYear] = useState(undefined)

    //Style var
    const width = 600

    //Graph parameters
    const monthsArray = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    const values = [1,1,1,1,1,1,1,1,1,1,1,2]
    const options = {}

    const init_func = async() => {

        const dateArray = await getDateRange()
        setMinDate( dateArray[0].substr(0,10) )
        setMaxDate( dateArray[1].substr(0,10) )

        setTimeout( ()=>{}, 100 )

        const arrayRestaurantes = await matrixToArray( await getData('restaurantes', 'nombre_restaurante', false) )

        setRestaurantes( arrayRestaurantes )
        setSelectedRestaurant( arrayRestaurantes[0] )

        setTimeout( () => {}, 100)

        const start = Number( dateArray[0].substr(0,4) )
        const end = Number( dateArray[1].substr(0,4) )
        let years = []
        for(let i = start; i < end + 1; i++){ years.push(i) }
        setYearsArray( years )
        setSelectedYear( years[0] )

    }

    useEffect( ()=> {init_func()}, [])

    return (
        <>
            <div style={{height: 45}}/>

            <div className="d-flex justify-content-center">
                <h3>Individual Stats</h3>
            </div>
            <div style={{height: 45}}/>

            <div className="d-flex justify-content-center">
                <div>
                    <div className='p-1 mb-0 bg-danger text-white' style={{width}}>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex justify-content-start p-2'><i>Ventas anuales</i></div> 
                            <div className='d-flex justify-content-end'>
                                <Picker setValue={setSelectedRestaurant} infoArray={restaurantes}/>
                                <Picker setValue={setSelectedYear} infoArray={yearsArray}/>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <LineGraph labels={monthsArray} values={values} options={options}/>
                    </div>
                </div>
            </div>
            <div style={{height: 45}}/>
    
        </>
    )
}