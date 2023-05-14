import React from 'react'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import { Proof, Graph, MainPage } from '../Pages'
import { NavBar } from '../Components'

export const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <NavBar/>
            </div>
            <div>
                <Routes>
                    <Route path='/*' element={ <Proof/> }/>
                    <Route path='/graph' element={ <Graph/> }/>
                    <Route path='/main' element={ <MainPage/> }/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
