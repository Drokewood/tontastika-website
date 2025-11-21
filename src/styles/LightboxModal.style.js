import styled from "styled-components";

// Full-screen overlay that covers everything
export const LightboxOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.theme.colors.overlayBackground || 'rgba(0, 0, 0, 0.8)'};
    backdrop-filter: blur(4px);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    
    /* Mobile: Less padding for more image space */
    @media (max-width: 768px) {
        padding: 10px;
    }
    
    @media (max-width: 480px) {
        padding: 5px;
    }
    
    /* Smooth fade animation */
    opacity: 0;
    animation: fadeIn 0.3s ease-out forwards;
    
    @keyframes fadeIn {
        to {
            opacity: 1;
        }
    }

    /* Weniger Rand auf Mobile */
    @media (max-width: 768px) {
    padding: 10px;  
    backdrop-filter: none;  
    }   

`;

// Container for the actual modal content
export const LightboxModalContainer = styled.div`
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    background-color: ${props => props.theme.colors.pageBackground || '#f5f0ff'};
    border-radius: 12px;
    box-shadow: 0 20px 40px ${props => props.theme.colors.shadowMedium || 'rgba(108, 63, 134, 0.4)'};
    padding: 20px;
    
    /* Mobile: Better sizing for small screens */
    @media (max-width: 768px) {
        max-width: 95vw;
        max-height: 85vh;
        padding: 15px;
    }
    
    @media (max-width: 480px) {
        max-width: 98vw;
        max-height: 90vh;
        padding: 10px;
        border-radius: 8px;
    }
    
    /* Scale animation */
    transform: scale(0.8);
    animation: scaleIn 0.3s ease-out forwards;
    
    @keyframes scaleIn {
        to {
            transform: scale(1);
        }
    }

`;

// The large image display
export const LightboxImage = styled.img`
    width: 100%;
    height: auto;
    max-width: 80vw;
    max-height: 70vh;
    object-fit: contain;
    border-radius: 8px;
    display: block;
    
    /* Mobile: Larger images on smaller screens */
    @media (max-width: 768px) {
        max-width: 90vw;
        max-height: 75vh;
    }
    
    @media (max-width: 480px) {
        max-width: 95vw;
        max-height: 80vh;
    }

}
`;

// Close button (X)
export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    
    /* Mobile: Touch-friendly larger button */
    @media (max-width: 768px) {
        width: 50px;
        height: 50px;
        font-size: 28px;
        top: 15px;
        right: 15px;
    }
    
    @media (max-width: 480px) {
        width: 55px;
        height: 55px;
        font-size: 32px;
        top: 10px;
        right: 10px;
    }
    background-color: ${props => props.theme.colors.button || '#b750f2'};
    color: white;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    z-index: 1001;
    
    &:hover {
        background-color: #ff4444;
        color: white;
        transform: scale(1.1);
    }
    
    &:focus {
        outline: 2px solid ${props => props.theme.colors.shadowMedium || '#b750f2'};
    }

    /* Größeres X für Touch */
    @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 28px;  
}
`;

