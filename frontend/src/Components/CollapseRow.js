import React from 'react'

export const CollapseRow = ({tuple, width}) => {

    const image = "https://media.timeout.com/images/105378187/750/422/image.jpg"
    return (
        <div style={{width}}>
            <img src={`${image}`} alt='' ></img>
            <p>{tuple}</p>
        </div>
    )
}
