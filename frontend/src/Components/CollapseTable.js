import React from 'react'
import { CollpaseSection } from './CollpaseSection'

export const CollapseTable = ({data, width}) => {

    return (
        <div style={{width}}>
            <>{ data.map( (tuple) => {
            return <CollpaseSection key={tuple} tuple={tuple} width={width}/>
        }) }</>
        </div>
    )
}
