import {React} from 'react';
import {Card} from 'react-bootstrap';
import './data-card.scss';


const DataCard = ({title}) =>{

    return (
        <Card className="data-card">
            <Card.Body className="data-card">
                <Card.Text className="data-card-text">{title}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default DataCard;