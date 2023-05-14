import React from 'react'
import { DoughnutGraph, LineGraph } from '../Components';

export const Graph = () => {

    const values = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
    const meses = ["January","February","March","April","May","June","July",
        "August","September","October","November","December"];
    const myOptions = {}

    return (
        <div>
            <h2>Graph</h2>
            <LineGraph labels={meses} values={values} options={myOptions}/>
            <DoughnutGraph labels={meses} values={values} options={myOptions}/>
        </div>
    )
}
