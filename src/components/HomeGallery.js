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
  // Gallery data array - much cleaner! 🚀
  const galleryItems = [
    { id: 1, image: TestBild, bgColor: '#ffebee' },
    { id: 2, image: TestBild, bgColor: '#e8f5e8' },
    { id: 3, image: TestBild, bgColor: '#e3f2fd' },
    { id: 4, image: TestBild, bgColor: '#fff3e0' },
    { id: 5, image: TestBild, bgColor: '#f1f8e9' },
    { id: 6, image: TestBild, bgColor: '#fce4ec' },
    { id: 7, image: TestBild, bgColor: '#e8eaf6' },
    { id: 8, image: TestBild, bgColor: '#e0f2f1' },
    { id: 9, image: TestBild, bgColor: '#fff8e1' },
  ];

  return (
    <GalleryContainer>
      <GalleryTitle>🏺 Tontastika Best-of Gallery</GalleryTitle>
      <GalleryGrid>
        {galleryItems.map((item) => (
          <GalleryItem key={item.id} style={{backgroundColor: item.bgColor}}>
            <HomeImage src={item.image} alt={`Tontastika Bild ${item.id}`} />
          </GalleryItem>
        ))}
      </GalleryGrid>
    </GalleryContainer>
  );
};

export default HomeGallery;