import {React} from 'react';
import {Line} from 'react-chartjs-2';


const options = {
    title: {
        display: false,
        position: 'bottom',
        text: ""
    },

}

const VisualizationChart = ({data}) =>{
    return(
        <Line data={data} options={options}></Line>
    );
}

export default VisualizationChart;