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
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ]}]
    }
    
    return (
        <div style={{width: '600px', height: '300px'}}> 
            <Doughnut data={data} options={options}/>
        </div>
    )
}
