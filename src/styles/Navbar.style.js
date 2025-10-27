import styled from "styled-components"
import { Link } from "react-router-dom"

/*
MODERN NAVBAR DESIGN & UX ENHANCEMENT - Phase 1 ABGESCHLOSSEN ✅
=================================================================

GELÖSTE PROBLEME:
1. ✅ Burger Menu Visibility: Button war in Firefox DevTools unsichtbar
   → Lösung: Robuste Media Queries mit !important und multiple Conditions

2. ✅ Layout Overflow: Elemente verschwanden außerhalb des Viewports  
   → Lösung: overflow-x: hidden + max-width: 100vw + box-sizing: border-box

3. ✅ Complex Layout Mathematics: 930px Breakpoint Probleme durch komplexe Flex-Berechnungen
   → Lösung: justify-content: space-between + gap-basiertes Layout

NOCH ZU IMPLEMENTIEREN (siehe TODO):
- 420px Ultra-Mobile Breakpoint (Text "zerreißen", Background-Probleme)
- Custom Font Integration (PermanentMarker, SageSans, Bosk)
- Animation Vervollständigung (slideDown, Hamburger Rotation)
- Cross-Browser Testing auf echten Geräten

Letzte Änderung: Dokumentation der Problemlösungen hinzugefügt
*/

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    /* 
    PROBLEM GELÖST: Space-Between Layout Solution
    justify-content: space-between ersetzt komplexe Prozent-basierte Flex-Container
    - Automatische Aufteilung: Logo links, Navigation rechts
    - Kein manuelles Berechnen von Containerbreiten mehr nötig
    - Löst 930px Breakpoint-Probleme durch Vereinfachung der Layout-Mathematik
    */
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    /* Ensure navbar scales with viewport */
    box-sizing: border-box;
    
    @media (max-width: 600px) {
        padding: 0 20px;
    }
`

export const NavbarContainer = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    /* props.$extendNavbar wird aus der Navbar.js übermittelt - dort sind weitere Informationen */
    /* Wenn $extendNavbar true ist, wird die Höhe auf 100vh gesetzt, andernfalls auf 100px */
    /* dieses Konstrukt wird Ternary Operator genannt, es handelt sich hier um eine if-else-Bedingung */
    height: ${(props) => (props.$extendNavbar ? "100vh" : "100px")};
    background-color: ${({ theme }) => theme.colors.navbar};
    display: flex;
    flex-direction: column;
    /* Smooth height transition animation - schneller für bessere UX */
    transition: height 0.2s ease-in-out;
    /* moderner Schlagschatten */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    /* z-index: 1000 ist keine Pixelangabe, sondern eine CSS-priorisierungs-Eigenschaft, die das Element über andere Elemente legt und Scrollprobleme verhindert */
    z-index: 1000;
    
    /* 
    PROBLEM GELÖST: Layout Overflow Prevention
    - overflow-x: hidden verhindert horizontales Scrollen
    - max-width: 100vw stellt sicher, dass die Navbar nie breiter als der Viewport wird
    - box-sizing: border-box sorgt dafür, dass Padding in die Gesamtbreite eingerechnet wird
    Diese Kombination löst das Problem, dass Elemente außerhalb des sichtbaren Bereichs verschwanden
    */
    overflow-x: hidden;
    overflow-y: visible;
    max-width: 100vw;
    box-sizing: border-box;
`;

export const LeftContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Image = styled.img`
    margin: 10px;
    width: auto;
    max-height: 80px;
    
    /* MOBILE LOGO SCALING: Kleiner Logo für bessere Burger Menu Sichtbarkeit */
    @media (max-width: 800px) {
        max-height: 60px;
        margin: 5px;
    }
`

export const RightContainer = styled.div`
    display: flex;
    align-items: center;
    /* 
    TEIL DER LÖSUNG: Vereinfachtes Gap-basiertes Layout
    gap: 10px ersetzt komplexe margin-Berechnungen zwischen Navigations-Elementen
    Arbeitet zusammen mit justify-content: space-between aus NavbarInnerContainer
    */
    gap: 10px;
`;

export const NavbarLinkContainer = styled.div`
    display: flex;
`;

export const NavbarLogoLink = styled(Link)`
    color: black;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    text-decoration: none;
    margin: 10px;
`

export const NavbarLinkExtended = styled(Link)`
    color: black;
    font-size: x-large;
    /* Custom Font: SageSans für moderne, cleane Navigation */
    font-family: "SageSans", "Bosk", Arial, Helvetica, sans-serif;
    font-weight: bold;
    text-decoration: none;
    margin: 10px;
`

export const NavbarLink = styled(Link)`
    color: black;
    font-size: x-large;
    /* Custom Font: SageSans für moderne, cleane Navigation */
    font-family: "SageSans", "Bosk", Arial, Helvetica, sans-serif;
    font-weight: bold;
    text-decoration: none;
    margin: 10px;

    @media (max-width: 800px) {
        display: none;
    }
`

export const NavbarHomeLink = styled(Link)`
    color: #228B22;
    font-size: x-large;
    /* Custom Font: SageSans für moderne, cleane Navigation */
    font-family: "SageSans", "Bosk", Arial, Helvetica, sans-serif;
    font-weight: bold;
    text-decoration: none;
    margin: 10px;

    @media (max-width: 800px) {
        display: none;
    }
`

export const OpenLinkButton = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: black;
    font-size: 35px;
    cursor: pointer;
    /* 
    Rotations Animation für das Burgermenü
    ease-in-out sorgt für sanfte Animation, startet langsam und wird schneller und endet langsam
    ease-in sorgt dafür, dass die Animation am Anfang langsamer ist und dann schneller wird
    ease-out sorgt dafür, dass die Animation am Anfang schneller ist und dann langsamer wird
    ease-linear sorgt für eine konstante Geschwindigkeit während der gesamten Animation
    */
    transition: transform 0.2s ease-in-out;
    border-radius: 8px;
    display: flex;
    align-items: center;
    /* justify-content: center zentriert das Hamburger-Symbol horizontal im Button */
    justify-content: center;
    
    /* & = "dieses Element" existiert nur in styled-components */
    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
        transform: scale(1.05);
    }
    
    &:active {
        transform: scale(0.95);
    }
    
    /* 
    PROBLEM GELÖST: Burger Menu Visibility Fix
    Das Problem war, dass der Button in Firefox DevTools unsichtbar war
    Lösung: space-between Layout in NavbarInnerContainer beseitigte Layout-Konflikte
    
    !important als defensive Absicherung - könnte theoretisch entfernt werden:
    - screen and (min-width: 800px): versteckt Button auf Desktop  
    - screen and (max-width: 799px): zeigt Button auf Mobile
    - (pointer: coarse): zusätzliche Erkennung für Touch-Geräte
    */
    @media screen and (min-width: 800px) {
        display: none !important;
    }
    
    @media screen and (max-width: 799px), (pointer: coarse) {
        display: flex !important;
    }
`
export const NavbarExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* Slide animation für die Navbar-Links - schneller und smoother */
    animation: slideDown 0.2s ease-out;
    
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`