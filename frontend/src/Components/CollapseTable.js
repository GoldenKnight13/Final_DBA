import React from 'react'
import { CollpaseSection } from './CollpaseSection'

export const CollapseTable = ({restaurantData, telephonesAndLocations, width}) => {

    return (
        <div style={{width}}>
            <>{ restaurantData.map( (tuple) => {
            return <div>
                <CollpaseSection 
                    key={ Math.floor( Math.random() * Date.now() )}
                    tuple={tuple} 
                    telephonesAndLocations={telephonesAndLocations} 
                    width={width}/>
            </div>
        }) }</>
        </div>
    )
}
