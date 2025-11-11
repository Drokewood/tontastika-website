import React from 'react';
import { 
    GalleryContainer, 
    GalleryTitle, 
    GalleryGrid, 
    GalleryItem,
    HomeImage
} from '../styles/HomeGallery.style';
import TestBild from '../assets/Otterloon.jpg';


const HomeGallery = () => {
  return (
    <GalleryContainer>
      <GalleryTitle>🏺 Tontastika Best-of Gallery</GalleryTitle>
      <GalleryGrid>
        <GalleryItem style={{backgroundColor: '#ffebee'}}>
          <HomeImage src={TestBild} alt="Bild 1" />
        </GalleryItem>
        <GalleryItem style={{backgroundColor: '#e8f5e8'}}>
          <HomeImage src={TestBild} alt="Bild 2" />
        </GalleryItem>
        <GalleryItem style={{backgroundColor: '#e3f2fd'}}>
          <HomeImage src={TestBild} alt="Bild 3" />
        </GalleryItem>
      </GalleryGrid>
    </GalleryContainer>
  );
};

export default HomeGallery;