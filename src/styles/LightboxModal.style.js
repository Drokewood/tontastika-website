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
    
    /* Smooth fade animation */
    opacity: 0;
    animation: fadeIn 0.3s ease-out forwards;
    
    @keyframes fadeIn {
        to {
            opacity: 1;
        }
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
`;

