import React from 'react'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import { Proof, Graph, ShowDataPage, MainPage } from '../Pages'
import { NavBar } from '../Components'

export const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <NavBar/>
            </div>
            <div>
                <Routes>
                    <Route path='/*' element={ <MainPage/> }/>
                    <Route path='/graph' element={ <Graph/> }/>
                    <Route path='/showDataPage' element={ <ShowDataPage/> }/>
                    <Route path='/proof' element={ <Proof/> }/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
