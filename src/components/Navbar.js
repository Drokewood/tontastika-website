
import logo from '../assets/Logo_Webseite.png';
import { useState } from 'react'
import { 
    NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarInnerContainer,
    NavbarExtendedContainer,
    NavbarLinkContainer,
    NavbarContactLink,
    Image,
    OpenLinkButton,
    NavbarLinkExtended,
    NavbarLogoLink,
    NavbarHomeLink
} from '../styles/Navbar.style'

export const Navbar = () => {
    const [extendNavbar, setExtendNavbar] = useState(false);

    return (
        // $extendNavbar ist nur der Name der Prop, die an das styled component übergeben wird.
        // Die eigentliche Variable heißt extendNavbar und wird in den Klammern an die Navbar.style.js übergeben und ausgewertet.
        // das $-Zeichen vor der Prop ist eine Konvention, um Props zu kennzeichnen, die speziell für styled-components verwendet werden.
    <NavbarContainer $extendNavbar={extendNavbar}> 
        <NavbarInnerContainer>
            <LeftContainer>
                <NavbarLogoLink to="/"><Image src={logo} /></NavbarLogoLink>
            </LeftContainer>
            <RightContainer>
                <NavbarLinkContainer>
                    <NavbarHomeLink to="/" > Home </NavbarHomeLink>
                    {/* <NavbarContactLink to="/contract" > Aufträge </NavbarContactLink> */}
                    <NavbarContactLink to="/contact" > Kontakt </NavbarContactLink>
                </NavbarLinkContainer>
                {/* &#8801; = unicode icon id */}
                <OpenLinkButton onClick={() => {
                    setExtendNavbar(!extendNavbar)
                }}> {extendNavbar ? <> &#10005; </> : <> &#8801; </> } </OpenLinkButton>
            </RightContainer>
        </NavbarInnerContainer>
        { extendNavbar &&
            (
                <NavbarExtendedContainer>
                    <NavbarLinkExtended to="/" onClick={() => setExtendNavbar(false)} > Home </NavbarLinkExtended>
                    <NavbarLinkExtended to="/contact" onClick={() => setExtendNavbar(false)} > Kontakt </NavbarLinkExtended>
                    <NavbarLinkExtended to="/tos" onClick={() => setExtendNavbar(false)} > Terms of Service </NavbarLinkExtended>
                    <NavbarLinkExtended to="/impressum" onClick={() => setExtendNavbar(false)} > Impressum </NavbarLinkExtended>
                    <NavbarLinkExtended to="/agb" onClick={() => setExtendNavbar(false)} > AGB </NavbarLinkExtended>
                </NavbarExtendedContainer>
            )
        }

            
            
    </NavbarContainer>
    )
}