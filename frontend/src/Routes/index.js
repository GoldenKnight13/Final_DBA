import React from 'react'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import { Proof, Graph, MainPage, Playground } from '../Pages'
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
                    <Route path='/playground' element={ <Playground/> }/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
