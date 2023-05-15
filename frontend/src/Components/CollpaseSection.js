import React from 'react'
import { CollapseRow } from './CollapseRow'
import { ExpandButton } from './ExpandButton'
import OpenController from '../Hooks/OpenController'

export const CollpaseSection = ({tuple, width}) => {

    const {open, toggle } = OpenController( false )

    return (
        <div> 
            <div className='d-flex justify-content-center'>
                <div className='p-1 mb-0 bg-dark text-white'>

                    <div className='d-flex justify-content-between' style={{width}}>
                        <div className='d-flex justify-content-start p-2'><i>{tuple[1]}</i></div> 
                        <div className='d-flex justify-content-end'>
                            <ExpandButton isOpen={open} toggle={toggle}/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {open && <CollapseRow tuple={tuple} width={width}/>}
            </div>
            <div style={{height: 10}}/>
        </div>
    )
}
