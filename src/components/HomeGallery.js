import React from 'react';
import { 
    GalleryContainer, 
    GalleryTitle, 
    GalleryGrid, 
    GalleryItem 
} from '../styles/HomeGallery.style';

const HomeGallery = () => {
  return (
    <GalleryContainer>
      <GalleryTitle>🏺 Tontastika Best-of Gallery</GalleryTitle>
      <GalleryGrid>
        <GalleryItem style={{backgroundColor: '#ffebee'}}>
          Bild 1
        </GalleryItem>
        <GalleryItem style={{backgroundColor: '#e8f5e8'}}>
          Bild 2
        </GalleryItem>
        <GalleryItem style={{backgroundColor: '#e3f2fd'}}>
          Bild 3
        </GalleryItem>
      </GalleryGrid>
    </GalleryContainer>
  );
};

export default HomeGallery;