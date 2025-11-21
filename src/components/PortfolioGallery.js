import React, { useEffect } from "react";
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

// ESC-Taste Keyboard Support - schließt Modal bei ESC-Druck
useEffect(() => {
    const handleKeyDown = (event) => {
        if (event.key === 'Escape' && isLightboxOpen) {
            setIsLightboxOpen(false);
        }
    };
    
    // Event-Listener für die ganze Seite hinzufügen
    document.addEventListener('keydown', handleKeyDown);
    
    // Cleanup function: Listener wieder entfernen (wichtig für Performance!)
    return () => {
        document.removeEventListener('keydown', handleKeyDown);
    };
    // Dependency Array: der useEffect wird nur ausgeführt, wenn sich isLightboxOpen ändert
    // Modal öffnet sich → isLightboxOpen wird true → useEffect läuft → Event-Listener wird erstellt
    // Modal schließt sich → isLightboxOpen wird false → useEffect läuft → Cleanup function entfernt Listener
}, [isLightboxOpen]);

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