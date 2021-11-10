import React from 'react';
import './image-wrapper.scss';

const ImageWrapper = ({title,image}) =>{
    return (
        <div className="rounded-circle">
            <img className="image-wrapper" src={image} alt={title}></img>            
        </div>
    );
}

export default ImageWrapper;

