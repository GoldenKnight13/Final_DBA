import React, { useEffect, useState } from 'react'
import { getData, getDateRange, getDifferentValues, getYearSales, matrixToArray } from '../functions'
import { BarGraph, DoughnutGraph, LineGraph, Picker } from '../Components'

export const IndividualStats = () => {
    
    //DB structure
    const [restaurantes, setRestaurantes ] = useState([])
    const [yearsArray, setYearsArray] = useState([])
    const [ genders, setGenders ] = useState([])
    const [ months, setMonths ] = useState([])
    const [ sales, setSales ] = useState([])

    //User variables
    const [selectedYear, setSelectedYear] = useState(undefined)
    const [selectedRestaurant, setSelectedRestaurant] = useState(undefined)

    //Size variable
    const width = 600
    const options = {}

    const platillos = ['Pizza', 'Enchiladas', 'Sopa', 'Chilaquiles', 'Hamburguesa', 'Bistec', 'Cheesecake', 'Pie de limon', 'Galletas', 'Atun' ]
    const ventas = [ 100, 200, 250, 120, 30, 377, 105, 45, 89, 73]

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

        setTimeout( () => {}, 100)

        const clientsGenders = await getDifferentValues('clientes', 'sexo')
        setGenders( clientsGenders )

        const graph1 = await getYearSales( arrayRestaurantes[0], years[0] )
        setMonths( graph1.column1Array )
        setSales( graph1.column2Array )
    }

    const handleParamsChange = async() => {
        const graph1 = await getYearSales( selectedRestaurant, selectedYear)
        setMonths( graph1.column1Array )
        setSales( graph1.column2Array )
    }

    useEffect( ()=> {init_func()}, [])
    useEffect( () => { handleParamsChange() }, [ selectedRestaurant, selectedYear])

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

            <div className='Ventas anuales'>
                <div className="d-flex justify-content-center">
                    <div>
                        <div className='p-1 mb-0 bg-danger text-white' style={{width}}>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex justify-content-start p-2'><i>Ventas anuales</i></div> 
                                </div>
                            </div>

                        <div className="d-flex justify-content-center">
                            <LineGraph labels={months} values={sales} options={options}/>
                        </div>

                    </div>
                </div>
            </div>
            <div style={{height: 45}}/>

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
                    <DoughnutGraph labels={platillos} values={ventas} options={options}/>
                </div>
            </div>
            <div style={{height: 45}}/>

            <div className='Visitas por genero'>
                <div className='d-flex justify-content-center'>
                    <div className='p-1 mb-0 bg-danger text-white' style={{width}}>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex justify-content-start p-2'><i>Visitas por género</i></div> 
                        </div>
                    </div>
                </div> 
                <div className="d-flex justify-content-center">
                    <BarGraph labels={genders} values={[1,2, 2.5]} options={{}}/>
                </div>
            </div>
            <div style={{height: 45}}/>
    
        </>
    )
}