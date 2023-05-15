import React from 'react'

export const ExpandButton = ({open, toggle}) => {
    return (
        <button onClick={toggle}>
            <span >
                expand_more
            </span>
        </button>
    )
}
