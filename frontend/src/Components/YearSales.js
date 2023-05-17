import React, {useEffect, useState} from 'react'
import { Picker } from './Picker'
import { LineGraph } from './LineGraph'


export const IndividualYearStats = ({selectedRestaurant, yearsArray}) => {

    //User variables
    const [selectedYear, setSelectedYear] = useState(undefined)

    //

    //Style var
    const width = 600

    //Graph parameters
    const monthsArray = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    const [ values, setValues ] = useState([])
    const options = {}

    const initFunc = () => {

        setSelectedYear( yearsArray[0] )
        setValues( [1,1,1,1,1,1,1,1,1,1,1,2] )
    }

    useEffect( ()=>{ initFunc() }, [])

    return (
        <div className="d-flex justify-content-center">
            <div>
                <div className='p-1 mb-0 bg-danger text-white' style={{width}}>
                    <div className='d-flex justify-content-between'>

                        <div className='d-flex justify-content-start p-2'><i>Ventas anuales</i></div> 

                            <div className='d-flex justify-content-end'>
                                <Picker setValue={setSelectedYear} infoArray={yearsArray}/>
                            </div>

                        </div>
                    </div>

                <div className="d-flex justify-content-center">
                    <LineGraph labels={monthsArray} values={values} options={options}/>
                </div>


            </div>
        </div>
    )
}
