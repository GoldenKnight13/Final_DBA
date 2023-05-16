import React from 'react'
import { Button } from 'react-bootstrap'

export const CollapseRow = ({tuple, telephonesAndLocations, width}) => {

    const {nombre_restaurante, tipo_comida, pagina_web} = tuple
    const image = "https://media.timeout.com/images/105378187/750/422/image.jpg"
    const id = tuple.nombre_restaurante 

    const getMyLocations = () => {
        const locations = telephonesAndLocations.locationsArray
        return locations.map( (values)=> {

            if( values[0] === id ){
                return <p key={values} className="card-text">
                    {values[1]}&emsp;
                </p>
            } else {
                return <></>
            }
        })
    }

    const getMyTelephones = () => {
        const telephones = telephonesAndLocations.telephonesArray
        return telephones.map( (values)=> {
            if( values[0] === id ){
                return <p key={values} className="card-text">
                    {values[1]}&emsp;
                </p>
            }
            return <></>
        })
    }

    return (
        <div className="card" style={{width}}>
            <img className="card-img-top" src={`${image}`} alt=""/>
            <div className="card-body">
                <h4 className="card-title">{nombre_restaurante}</h4>
                <div className='p-3 d-flex align-items-center'> 
                    <h6 className='card-title m-0 p-0'>Tipo de comida: &emsp;</h6>
                    <p className="card-text">{ tipo_comida}</p>
                </div>
                <div className='p-3 d-flex align-items-center'>
                    <h6 className='card-title m-0 p-0'> Ubicaciones: &emsp;</h6>
                    <div className='d-flex flex-column'>
                        <>{getMyLocations()}</>
                    </div>
                    <div className='d-flex flex-column'>
                        <>{getMyTelephones()}</>
                    </div>
                </div>
                <div style={{height: 25}}/>
                <div className='d-flex justify-content-end'>
                    <Button onClick={ ()=>{ console.log( pagina_web )} }>Ir al sitio web</Button>
                </div>
            </div>
        </div>
    )
}
