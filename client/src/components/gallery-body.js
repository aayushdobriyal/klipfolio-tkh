import {React} from 'react';

import ServiceGallery from './service-gallery.js';
import DataGallery from './data-gallery.js';


const GalleryBody = () =>{
    return (
        <div>
            <ServiceGallery></ServiceGallery>
            <DataGallery></DataGallery>
        </div>

    );
}

export default GalleryBody;