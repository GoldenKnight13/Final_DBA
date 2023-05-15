import React from 'react'
import { CollapseRow } from './CollapseRow'
import { ExpandButton } from './ExpandButton'
import OpenController from '../Hooks/OpenController'

export const CollpaseSection = ({tuple, width}) => {

    const {open, toggle } = OpenController( false )

    return (
        <div>
            <div className='d-flex justify-content-center'>
                <div className='p-1 mb-2 bg-dark text-white'>

                    <div className='d-flex justify-content-around' style={{width}}>
                        <div className='d-flex justify-content-start'>{tuple[0]}</div> 
                        <div className='d-flex justify-content-end'>
                            <ExpandButton open={open} toggle={toggle}/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {open && <CollapseRow tuple={tuple} width={width}/>}
            </div>
                
            
        </div>
    )
}
