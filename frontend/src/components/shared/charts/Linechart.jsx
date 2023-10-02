
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS} from "chart.js/auto"

function Linechart({chartData,chartTitle}) {

  const options = {
    // Configuration options go here
    responsive: true, // Make the chart responsive to screen size
    maintainAspectRatio: false, // Allow the chart to scale
 
    plugins: {
      legend: {
        display: true, // Show legend
        position: 'bottom', // Position of the legend (top, bottom, left, right)
      
      },
      title: {
        display: true,
        text: `${chartTitle}`, // Chart title
        color:"#000",
        font:{size:20}
       
      },
    },
  };


  
 
  return (
    <Line data={chartData} options={options} />
  )
}

export default Linechart