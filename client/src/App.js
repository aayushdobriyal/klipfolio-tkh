import './App.scss';
import GalleryBody from './components/gallery-body';
import ServiceGallery from './components/service-gallery';
import GalleryHeader from './components/gallery-header';

function App() {
  return (
    <div>
      <GalleryHeader></GalleryHeader>
      <ServiceGallery></ServiceGallery>
    </div>
  );
}

export default App;
