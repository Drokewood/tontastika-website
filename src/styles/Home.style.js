import styled from "styled-components"

export const HomeContainer = styled.div`
    padding-top: 99px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    background-color: ${props => props.theme.colors.pageBackground};

    @media (max-width: 344px) {
        padding-top: 30px;
    }
`

export const StyledHomeContainer = styled.div `
    align-items: center;
    justify-content: center;
    height: auto;
    width: 90%; 
    /* für den Desktop, damit nicht zu viel Platz genutzt wird */
    max-width: 800px;

    /* @media (min-width: 768px) bedeutet, dass die folgenden Styles nur angewendet werden, wenn die Bildschirmbreite mindestens 768 Pixel beträgt. */
    @media (min-width: 768px) {
        /* für Tablets und größere Mobile Bildschirme */
        width: 70%;
    }

    @media (min-width: 1200px) {
        /* für Desktops und größere Bildschirme */
        width: 50%;
    }
`

export const HomeTextContainer = styled.div`
    width: 100%;
    padding: 60px 30px;
    
    @media (max-width: 600px) {
        /* Weniger seitliches padding auf Mobile */
        padding: 60px 10px;  
    }
`

export const StyledHomeText = styled.div`
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* verhindert Überlauf */
    overflow: hidden; 
    
    font-size: large;

    h1 {
        font-family: "PermanentMarker";
        color: ${props => props.theme.colors.fontColor};
        width: 100%;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        /* erlaubt Zeilenumbruch */
        white-space: normal; 
        /* bricht lange Wörter um */
        word-wrap: break-word; 
        
        /* Mobile font-size reduction */
        @media (max-width: 768px) {
            /* Kleinere Schrift für Tablets */
            font-size: 1.5rem; 
        }
        
        @media (max-width: 344px) {
            /* Noch kleiner für Smartphones & Foldables */
            font-size: 1.2rem; 
        }
    }

    li {
        font-family: "sagesans";
        color: ${props => props.theme.colors.fontColor};
    }

    p {
        font-family: "sagesans";
        color: ${props => props.theme.colors.fontColor};
    }

`

export const TestContainer = styled.div`
    width: 100%;
    display: flex;
    margin-top: 30px;
    justify-content: center;
`
