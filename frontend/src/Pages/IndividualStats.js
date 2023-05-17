import React, { useEffect, useState } from 'react'
import { getData, getDateRange, matrixToArray } from '../functions'
import { DoughnutGraph, IndividualYearStats, Picker } from '../Components'

export const IndividualStats = () => {
    
    //DB structure
    const [ minDate, setMinDate ] = useState(undefined)
    const [ maxDate, setMaxDate ] = useState(undefined)
    const [restaurantes, setRestaurantes ] = useState([])
    const [yearsArray, setYearsArray] = useState([])

    //User variables
    
    const [selectedRestaurant, setSelectedRestaurant] = useState(undefined)

    //Size variable
    const width = 600

    const platillos = ['Pizza', 'Enchiladas', 'Sopa', 'Chilaquiles', 'Hamburguesa', 'Bistec', 'Cheesecake', 'Pie de limon', 'Galletas', 'Atun' ]
    const ventas = [ 100, 200, 250, 120, 30, 377, 105, 45, 89, 73]

    //Functions that executes the first time this page is rendered
    const init_func = async() => {

        //Get the date range
        const dateArray = await getDateRange()
        setMinDate( dateArray[0].substr(0,10) )
        setMaxDate( dateArray[1].substr(0,10) )

        //Timeout for promises to be fullfilled 
        setTimeout( ()=>{}, 100 )

        //Get the restaurants name
        const arrayRestaurantes = await matrixToArray( await getData('restaurantes', 'nombre_restaurante', false) )
        setRestaurantes( arrayRestaurantes )
        setSelectedRestaurant( arrayRestaurantes[0] )

        setTimeout( () => {}, 100)

        //Array of available years
        const start = Number( dateArray[0].substr(0,4) )
        const end = Number( dateArray[1].substr(0,4) )
        let years = []
        for(let i = start; i < end + 1; i++){ years.push(i) }
        setYearsArray( years )
    }

    useEffect( ()=> {init_func()}, [])

    return (
        <>
            <div style={{height: 45}}/>

            <div className="d-flex justify-content-center">
                <h3>Individual Stats</h3>
            </div>
            <div style={{height: 45}}/>

            <div className='d-flex justify-content-center'>
                <div className='p-1 mb-0 bg-danger text-white' style={{width}}>

                    <div className='d-flex justify-content-between'>
                        <div className='d-flex justify-content-start p-2'><i>Selecciona un restaurante</i></div> 
                        <div className='d-flex justify-content-end'>
                            <Picker setValue={setSelectedRestaurant} infoArray={restaurantes}/>
                        </div>
                    </div>

                </div>
            </div>
            <div style={{height: 45}}/>

            <IndividualYearStats selectedRestaurant={selectedRestaurant} yearsArray={yearsArray}/>
            <div style={{height: 45}}/>

            <div className='d-flex justify-content-center'>
                <div className='p-1 mb-0 bg-danger text-white' style={{width}}>

                    <div className='d-flex justify-content-between'>
                        <div className='d-flex justify-content-start p-2'><i>Platillo más vendido</i></div> 
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <div style={{width: 400}}/>
                <DoughnutGraph labels={platillos} values={ventas} options={{}}/>
            </div>

            <div style={{height: 45}}/>
    
        </>
    )
}