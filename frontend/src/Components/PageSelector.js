import React from 'react'

export const PageSelector = ( {maxPages, changePage} ) => {    

    const renderButtons = () => {

        let auxiliar = []

        for(let i = 0; i < maxPages; i++){ auxiliar.push(i) }
        
        auxiliar.map( (value) => {
            return <input type='radio' value={value}/>
        })

    }

    return (
        <div>
            <form onChange={ (e) => { e.preventDefault(); changePage( e.target.value ) }} >
                <>{ renderButtons() }</>
            </form>
        </div>
    )
}
