import {React} from 'react';

import ServiceGallery from './service-gallery.js';
import DataGallery from './data-gallery.js';
import VisualizationsGallery from './visualizations-gallery';

const GalleryBody = () =>{
    return (
        <div>
            <VisualizationsGallery></VisualizationsGallery>
            <ServiceGallery></ServiceGallery>
            <DataGallery></DataGallery>
        </div>

    );
}

export default GalleryBody;