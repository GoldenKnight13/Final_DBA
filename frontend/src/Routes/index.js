import React from 'react'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import { MainPage, IndividualStats, GroupStats, Meme } from '../Pages'
import { NavBar } from '../Components'

export const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <NavBar/>
            </div>
            <div>
                <Routes>
                    <Route path='/*' element={ <IndividualStats/> }/>
                    <Route path='/restaurants' element={ <MainPage/> }/>
                    <Route path='/groupStats' element={ <GroupStats/> }/>
                    <Route path='/meme' element={ <Meme/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
