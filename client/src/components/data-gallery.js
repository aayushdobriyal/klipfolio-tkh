import {React, useState, useEffect} from 'react';
import {Row, Col} from 'react-bootstrap';

import DataCard from './data-card';

function getDataSources(){
    return [{
        'title': "GA Sessions by Source and Country and Browser and Pages and this is the reason why I like to do this"
    },{
        'title': "Retention Expansion Data"
    }
];
}

const DataGallery = () => {
    const [data_sources, setDataSources] = useState([]);

    useEffect(()=>{
        setDataSources(getDataSources());
    }, []);

    return (
        <Row xs={2}> 
            {data_sources.map( (data_source, index) => 
                <Col xs={2}>
                    <DataCard title={data_source.title} key={"d"+index.toString()}></DataCard>
                </Col>
            )
            }
        </Row>

    );
}

export default DataGallery;