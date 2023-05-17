import React from 'react'
import OpenController from '../Hooks/OpenController'
import { Button } from 'react-bootstrap'

export const Meme = () => {

    const { open, toggle } = OpenController()

    return (
        <> 
            <div style={{height: 75}}/>
            <div className='d-flex justify-content-center'>
                <img src='https://media.tenor.com/smu7cmwm4rYAAAAd/general-kenobi-kenobi.gif' alt='loading...'/>
            </div>

            <div style={{height: 100}}/>

            <div className='d-flex justify-content-center'>
                <Button onClick={toggle}>Do not click</Button>
            </div>
            <div className='d-flex justify-content-center'>
                {open && <div>
                        <div style={{height: 20}}/>
                        <img src='https://thumbs.gfycat.com/EvilUnkemptGentoopenguin-max-1mb.gif' alt='' style={{height: 300}}/>
                        <div style={{height: 75}}/>
                    </div>}
            </div>

        </>
    )
}
