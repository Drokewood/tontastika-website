import React from 'react';
import { 
    LightboxOverlay,
    LightboxModalContainer, 
    LightboxImage,
    CloseButton 
} from "../styles/LightboxModal.style";

export const LightboxModal = ({ isOpen, imageUrl, imageAlt, onClose }) => {
    // Don't render anything if modal is closed
    if (!isOpen) return null;
    
    // Close modal when clicking on the overlay (outside the modal)
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    
    return (
        <LightboxOverlay onClick={handleOverlayClick}>
            <LightboxModalContainer>
                <CloseButton onClick={onClose} aria-label="Close modal">
                    ×
                </CloseButton>
                <LightboxImage 
                    src={imageUrl} 
                    alt={imageAlt || 'Portfolio image'}
                />
            </LightboxModalContainer>
        </LightboxOverlay>
    );
};

export default LightboxModal;