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

            return <div key={ Math.floor( Math.random() * 1000) }>
                <h6>{string}</h6>
            </div>
        })
    }

    return (
        <div>{ divData() }</div>
    )
}
