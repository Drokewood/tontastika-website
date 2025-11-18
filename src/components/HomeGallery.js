import React from 'react';
import { 
    GalleryContainer, 
    GalleryTitle, 
    GalleryGrid, 
    GalleryItem,
    HomeImage
} from '../styles/HomeGallery.style';
import { galleryItems } from '../data/images/HomeGalleryContent/homeimages';

const HomeGallery = () => {
  // Gallery data array - much cleaner! 🚀

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