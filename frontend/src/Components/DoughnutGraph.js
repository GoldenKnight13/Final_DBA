import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js' 


Chart.register( ArcElement, Tooltip, Legend )

export const DoughnutGraph = ({labels, values, options}) => {

    
    const data = {
        labels,
        datasets: [{
        label: 'My First Dataset',
        data: values,
        backgroundColor: [
            'rgb(230, 30, 30)',
            'rgb(54, 162, 235)',
            'rgb(237, 221, 31)',
            'rgb(241, 186, 61)', 
            'rgb(190, 147, 56)',
            'rgb(237, 31, 203)',
            'rgb(162, 31, 237)',
            'rgb(185, 48, 145)',
            'rgb(103, 229, 121)',
            'rgb(18, 74, 214)'
        ]}]
    }
    
    return (
        <div style={{width: '800px', height: '400px'}}> 
            <Doughnut data={data} options={options}/>
        </div>
    )
}
