import React, { useEffect, useState } from 'react'
import { DemandPerFoodType, DoughnutGraph, Picker, TopFoodType, TopSalesRestaurants } from '../Components'
import { getDateRange, getDifferentValues } from '../functions'

export const GroupStats = () => {

    //BD structure
    const[ genders, setGenders ] = useState([])
    const [yearsArray, setYearsArray] = useState([])
    const[ selectedGender, setSelectedGender ] = useState(undefined)

    //User variables
    const [selectedYear, setSelectedYear] = useState(0)

    //Style vars
    const width = 600

    let restaurantes = []
    let ventas = []

    const initFunc = async() => {
        setGenders( await getDifferentValues('clientes', 'sexo') )
        setSelectedGender( genders[0] )

        const dateArray = await getDateRange()
        const start = Number( dateArray[0].substr(0,4) )
        const end = Number( dateArray[1].substr(0,4) )
        let years = []
        for(let i = start; i < end + 1; i++){ years.push(i) }
        setYearsArray( years )

        setTimeout( ()=>{ setSelectedYear( years[0] ) }, 75)
    }

    useEffect( ()=> { initFunc() }, [])

    return (
        <>
            <div style={{height: 45}}/>

            <div className="d-flex justify-content-center">
                <h3>Group Stats</h3>
            </div>
            <div style={{height: 45}}/>

            <div className='Seleccion de  año'>
                <div className='d-flex justify-content-center'>
                    <div className='p-1 mb-0 bg-success text-white' style={{width}}>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex justify-content-start p-2'><i>Selecciona un año</i></div> 
                            <div className='d-flex justify-content-end'>
                                <Picker setValue={setSelectedYear} infoArray={yearsArray}/>
                            </div>
                        </div>

                    </div>
                </div>           
            </div>
            <div style={{height: 30}}/> 

            <TopSalesRestaurants year={selectedYear} width={width}/>
            <TopFoodType year={selectedYear} width={width}/>

            <div className='Visitas por genero'>
                <div className='d-flex justify-content-center'>
                    <div className='p-1 mb-0 bg-success text-white' style={{width}}>

                        <div className='d-flex justify-content-between'>
                            <div className='d-flex justify-content-start p-2'><i>Restaurantes más visitados por genero</i></div> 
                            <div className='d-flex justify-content-end'>
                                <Picker setValue={setSelectedGender} infoArray={genders}/>
                            </div>
                        </div>

                    </div>
                </div> 
                <div className="d-flex justify-content-center">
                    <div style={{width: 350}}/>
                    <DoughnutGraph labels={restaurantes} values={ventas} options={{}}/>
                </div>
            </div>
            <div style={{height: 45}}/>


        </>
    )
}
