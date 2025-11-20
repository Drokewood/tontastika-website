import React from "react";
import { PortfolioContent } from "../styles/portfolio.style";
import { 
    PortfolioGalleryContainer, 
    PortfolioGalleryTitle,
    PortfolioGalleryGrid,
    PortfolioGalleryItem,
    PortfolioImage

 } from "../styles/PortfolioGallery.style";
import { portfolioImages } from "../data/images/PortfolioGalleryContent/portfolioImages";
import LightboxModal from "./LightboxModal";



export const PortfolioGallery = () => {

// legt Variablen an mit denen wir die Lightbox steuern können, eine um den Zustand das ausgewählte Bildes zu speichern und eine um den Zustand der Lightbox (offen/geschlossen) zu speichern
const [selectedImage, setSelectedImage] = React.useState(null);
const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);

// Methoden zum Öffnen und Schließen der Lightbox
const openLightbox = (image) => {
    setSelectedImage(image);
    setIsLightboxOpen(true);
}; 

    return (
        <PortfolioContent>
            <PortfolioGalleryContainer>
                <PortfolioGalleryTitle>Portfolio Gallery - Coming Soon!</PortfolioGalleryTitle>
                <PortfolioGalleryGrid>
                    {/* Example items - replace with real portfolio items later */}
                    {portfolioImages.map(({id, image}) => (
                        <PortfolioGalleryItem key={id} style={{backgroundColor: '#f0f0f0'}}>
                            <PortfolioImage onClick={() => openLightbox(image)} src={image} alt={`Portfolio Item ${id}`} />
                        </PortfolioGalleryItem>
                    ))}
                </PortfolioGalleryGrid>
            </PortfolioGalleryContainer>
            <LightboxModal 
                isOpen={isLightboxOpen} 
                imageUrl={selectedImage} 
                onClose={() => setIsLightboxOpen(false)} 
            />
        </PortfolioContent>
    )
}