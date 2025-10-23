import styled from "styled-components"

export const HomeContainer = styled.div`
    padding-top: 99px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    background-color: #282c34;
`

export const StyledHomeContainer = styled.div `
    align-items: center;
    justify-content: center;
    height: auto;
    width: 90%; 
    // für den Desktop, damit nicht zu viel Platz genutzt wird
    max-width: 800px;

    // @media (min-width: 768px) bedeutet, dass die folgenden Styles nur angewendet werden, wenn die Bildschirmbreite mindestens 768 Pixel beträgt.
    @media (min-width: 768px) {
    // für Tablets und größere Mobile Bildschirme
        width: 70%;
    }

    @media (min-width: 1200px) {
    // für Desktops und größere Bildschirme
        width: 50%;
`

export const HomeTextContainer = styled.div`
    width: 100%;
    margin-top: 60px;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 60px;
`

export const StyledHomeText = styled.div`
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    
    font-size: large;

    h1 {
        font-family: "PermanentMarker";
        color: #be6ded;
    }

    li {
        font-family: "sagesans";
    }

    p {
        font-family: "sagesans";
        color: white;
    }

`

export const StyledInstaFeed = styled.div`
    width: 100%;
    height: auto;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    margin: 30px;
`
export const TestContainer = styled.div`
    width: 100%;
    display: flex;
    margin-top: 30px;
    justify-content: center;
`
