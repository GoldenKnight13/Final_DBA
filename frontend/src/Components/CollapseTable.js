import React from 'react'
import { CollpaseSection } from './CollpaseSection'

export const CollapseTable = ({data, width}) => {

    return (
        <div style={{width}}>
            <>{ data.map( (tuple) => {
            return <div>
                <CollpaseSection tuple={tuple} width={width}/>
            </div>
        }) }</>
        </div>
    )
}
