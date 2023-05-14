import React from 'react'
import { Line } from 'react-chartjs-2'
import { 
    Chart, CategoryScale, LinearScale,
    PointElement, LineElement, Title, 
    Tooltip, Legend, Filler } from 'chart.js' 

Chart.register(
    CategoryScale, LinearScale, PointElement,
    LineElement, Title, Tooltip,
    Legend, Filler
)


export const LineGraph = ({labels, values, options}) => {

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Pruebas',
                data: values,
                tension: 0.5,
                fill: true,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgb(255, 99, 132, 0.5)',
                pointRadius: 5,
                pointBorderColor: 'rgba(255, 99, 132)', 
                pointBackgroundColor: 'rgba(255, 99, 132)' 
            }
        ]     
    }

    return (
        <div style={{width: '450px', height: '230px'}}> 
            <Line data={ data } options={ options }/>
        </div>
    )
}
