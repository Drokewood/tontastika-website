import styled from 'styled-components';

export const GalleryContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`

export const GalleryTitle = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  color: #2c3e50;
`

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

export const GalleryItem = styled.div`
  aspect-ratio: 1;
  background: #f8f9fa;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6c757d;
  font-size: 0.9rem;
  border: 2px dashed #dee2e6;
`

export const HomeImage = styled.img`
    margin: 10px;
    width: auto;
`