import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart, BarElement, CategoryScale, 
    LinearScale, Tooltip, Legend } from 'chart.js'

Chart.register( BarElement, CategoryScale, LinearScale,
    Tooltip, Legend)

export const BarGraph = ({labels, values, options}) => {

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
        <div style={{width: '450px', height: '230px'}}>
            <Bar data={data} options={options}/>
        </div>
    )
}
