import React from 'react'
import { Button } from 'react-bootstrap'

export const CollapseRow = ({tuple, width}) => {

    const image = "https://media.timeout.com/images/105378187/750/422/image.jpg"

    return (
        <div className="card" style={{width}}>
            <img className="card-img-top" src={`${image}`} alt=""/>
            <div className="card-body">
                <h4 className="card-title">{tuple[1]}</h4>
                <div className='p-3 d-flex align-items-center'> 
                    <h6 className='card-title m-0 p-0'>Tipo de comida: &emsp;</h6>
                    <p className="card-text">{ tuple[3] }</p>
                </div>
                <div className='p-3 d-flex align-items-center'>
                    <h6 className='card-title m-0 p-0'>Platillos: &emsp;</h6>
                    <p className="card-text">{ tuple[3] }</p>
                </div>
                <div className='p-3 d-flex align-items-center'>
                    <h6 className='card-title m-0 p-0'> Ubicaciones: &emsp;</h6>
                    <p className="card-text">{ tuple[3] }</p>
                </div>
                <div className='d-flex justify-content-end'>
                    <Button onClick={ ()=>{ console.log(tuple[2])} }>Ir al sitio web</Button>
                </div>
            </div>
        </div>
    )
}
