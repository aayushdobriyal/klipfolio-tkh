import { React, useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import VisualizationChart from './visualizations-chart';
import './visualizations-gallery.scss';


function getVisualizations(){
    let data = [{
        labels: ["1", "2", "3", "4", "5"] ,
        datasets: [
            {
                label: "MRR",
                data: [10000, 150000, 130000, 10000, 144000],
                fill: true,
                backgroundColor: "rgba(0, 0, 255, 0.2)",
                borderColor: "rgba(0, 0, 255, 1)"
            }
        ]
    }];

    return data;
}




const VisualizationsGallery = () =>{
    const [visualizations, setVisualizations] = useState([]);

    useEffect(()=>{
        setVisualizations(getVisualizations());
        console.log("Rendered visualizations");

    }, []);

    return (
        <div>
            <h5>Recommended Visualizations</h5>
            <Row xs>
                {visualizations.map( (visualization, index) =>
                    <Col xs={2}>
                        <div className="chart-background">
                            <VisualizationChart data={visualization} key={"v"+index.toString()}></VisualizationChart>
                        </div>
                    </Col>
                )
                }            
            </Row> 
        </div>
    );
}

export default VisualizationsGallery;