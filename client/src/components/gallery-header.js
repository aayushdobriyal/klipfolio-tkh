import {React} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../assets/klipfolio_logo.png';
import './gallery-header.scss';
// TO ADD Search bar if enough time left
const GalleryHeader = () =>{
    return (
        <Container className="gallery-head">
            <Row>
                <Col xs={5}>
                    <img src={Logo} alt="Klipfolio Logo"></img>                
                </Col>
            </Row>

        </Container>
    );
}

export default GalleryHeader;