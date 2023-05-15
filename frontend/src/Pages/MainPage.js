import React, {useState, useEffect} from 'react'
import { CollapseTable } from '../Components'
import { getData } from '../functions'

export const MainPage = () => {

    const width = 800

    //Restaurants data
    const [data, setData] = useState([])

    const initFunction = async() => {
        setData( await getData( 'restaurantes', 'all' ) )
        console.log(data)
    }

    useEffect( () => { initFunction() }, [])

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
