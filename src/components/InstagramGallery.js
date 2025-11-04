import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import { GalleryContainer, TestSection } from '../styles/InstagramGallery.style';



const InstagramGallery = () => {
  return (
    <GalleryContainer>
      <h2>Instagram Gallery - Phase 1 Testing</h2>
      
      <TestSection>
        <h3>Test Post (Replace with real URL later):</h3>
        <InstagramEmbed 
          url="https://www.instagram.com/p/DL91Bl5oY5x/?img_index=1" 
          width={328}
        />
      </TestSection>
    </GalleryContainer>
  );
};

export default InstagramGallery;