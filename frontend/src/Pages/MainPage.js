import React, {useState, useEffect} from 'react'
import { CollapseTable } from '../Components'
import { getData, getTelephonesAndLocations } from '../functions'

export const MainPage = () => {

    const width = 800

    //Restaurants data
    const [restaurantData, setRestaurantData] = useState([])
    const [telephonesAndLocations, setTelephonesAndLocations] = useState([])

    const initFunction = async() => {
        setRestaurantData( await getData( 'restaurantes', 'all', true ) )
        setTelephonesAndLocations( await getTelephonesAndLocations() )
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
                    <CollapseTable 
                        restaurantData={restaurantData} 
                        telephonesAndLocations={ telephonesAndLocations} 
                        width={width}/>
                </div>
            </div>
        </>
    )
}
