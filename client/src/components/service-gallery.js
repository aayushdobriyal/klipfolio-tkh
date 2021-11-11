import {React, useState, useEffect} from 'react';
import ServiceCard from './service-card.js';
import fLogo from '../assets/facebook_logo.png';
import {Row, Col} from 'react-bootstrap';

function getServices(){
/* TO BE MOVED TO SERVER ONCE IMPLEMENTED JUST FOR TESTING PURPOSES*/    
    return [{
        'title': "Facebook",
        'img': fLogo,
    },{
        'title': "Facebook",
        'img': fLogo,      
    },{
        'title': "Facebook",
        'img': fLogo,      
    },{
        'title': "Facebook",
        'img': fLogo,      
    }];
}



const ServiceGallery = () =>{
    const [services, setServices] = useState([]);
    useEffect(() =>{
        setServices(getServices()); // to be changed once backend is implemented
    }, []);

    return (
            <Row xs> 
                {services.map( (service, index) => 
                    <Col xs={1}>
                        <ServiceCard title={service.title} img={service.img} key={index}></ServiceCard>
                    </Col>
                )
                }
            </Row>

    );
}

export default ServiceGallery;