import React from 'react'

export const ShowData = ( { data } ) => {

    const divData = () => {

        return data.map( (tuple) =>{
            let string = ''
            let len = tuple.length
            for(let i = 0; i < len; i++){
                const value = `\t${ tuple[i] }`
                string = string + value
            }

            return <div key={tuple}>
                <h3>{string}</h3>
            </div>
        })
    }

    return (
        <div>{ divData() }</div>
    )
}
