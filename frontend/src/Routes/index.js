import React from 'react'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import { Proof, MainPage, IndividualStats, GroupStats, Meme } from '../Pages'
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
                    <Route path='/individualStats' element={ <IndividualStats/> }/>
                    <Route path='/groupStats' element={ <GroupStats/> }/>
                    <Route path='/proof' element={ <Proof/> }/>
                    <Route path='/meme' element={ <Meme/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
