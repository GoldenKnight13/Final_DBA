import React from 'react'

export const Picker = ( { setValue, infoArray } ) => {

    const createOptions = () => {
        return infoArray.map( (name) => {
            return <option key={name} value={name}>{name}</option>
        })
    }

    return (
        <select onChange={ (e) => { setValue( e.target.value ) } }>
            <>{createOptions()}</>
        </select>
    )
        

}