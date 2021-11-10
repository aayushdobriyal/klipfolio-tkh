import {React} from 'react';
import Card from 'react-bootstrap/Card';
import './service-card.scss';
import ImageWrapper from './image-wrapper';


const ServiceCard = ({title, img}) =>{
    return (
        <Card className="text-center">
            <Card.Body className="service-card-body">
                <Card.Title className="small-text">{title}</Card.Title>
                <ImageWrapper image={img} title={title}></ImageWrapper>
            </Card.Body>

        </Card>
    );
}

export default ServiceCard;