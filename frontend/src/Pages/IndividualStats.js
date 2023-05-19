import React, { useEffect, useState } from 'react'
import { getData, getDateRange, matrixToArray } from '../functions'
import { DishSales, Picker, YearSales, TopLocations, GenderVisits, DeliveryTypePerRestaurant } from '../Components'

export const IndividualStats = () => {
    
    //DB structure
    const [ restaurantes, setRestaurantes ] = useState([])
    const [ yearsArray, setYearsArray] = useState([])

    //User variables
    const [selectedYear, setSelectedYear] = useState(undefined)
    const [selectedRestaurant, setSelectedRestaurant] = useState(undefined)

    //Size variable
    const width = 600
    
    //Functions that executes the first time this page is rendered
    const init_func = async() => {

        //Get the date range
        const dateArray = await getDateRange()
        const start = Number( dateArray[0].substr(0,4) )
        const end = Number( dateArray[1].substr(0,4) )
        let years = []
        for(let i = start; i < end + 1; i++){ years.push(i) }
        setYearsArray( years )
        setSelectedYear( years[0] )

        //Timeout for promises to be fullfilled 
        setTimeout( ()=>{}, 100 )

        //Get the restaurants name
        const arrayRestaurantes = await matrixToArray( await getData('restaurantes', 'nombre_restaurante', false) )
        setRestaurantes( arrayRestaurantes )
        setSelectedRestaurant( arrayRestaurantes[0] )
    }

    useEffect( ()=> {init_func()}, [])
    
    return (
        <>
            <div style={{height: 45}}/>

            <div className="d-flex justify-content-center">
                <h3>Individual Stats</h3>
            </div>
            <div style={{height: 45}}/>

            <div className='Seleccion de restaurante y año'>
                <div className='d-flex justify-content-center'>
                    <div className='p-1 mb-0 bg-danger text-white' style={{width}}>

                        <div className='d-flex justify-content-between'>
                            <div className='d-flex justify-content-start p-2'><i>Selecciona un restaurante</i></div> 
                            <div className='d-flex justify-content-end'>
                                <Picker setValue={setSelectedRestaurant} infoArray={restaurantes}/>
                                <div style={{width: 15}}/>
                                <Picker setValue={setSelectedYear} infoArray={yearsArray}/>
                            </div>
                        </div>

                    </div>
                </div>           
            </div>
            <div style={{height: 45}}/> 

            <YearSales restaurant={selectedRestaurant} year={selectedYear} width={width}/>
            <DishSales restaurant={selectedRestaurant} year={selectedYear} width={width}/>
            {/*<AverageTicket restaurant={selectedRestaurant} year={selectedYear} width={width}/>*/}
            <TopLocations restaurant={selectedRestaurant} year={selectedYear} width={width}/>
            <GenderVisits restaurant={selectedRestaurant} year={selectedYear} width={width}/>
            <DeliveryTypePerRestaurant restaurant={selectedRestaurant} year={selectedYear} width={width}/>

        </>
    )
}