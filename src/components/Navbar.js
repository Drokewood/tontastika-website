
import logo from '../assets/Logo_Webseite.png';
import { useState } from 'react'
import { 
    NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarInnerContainer,
    NavbarExtendedContainer,
    NavbarLinkContainer,
    NavbarLink,
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
                {/* &#8801; = unicode icon id */}
                <OpenLinkButton onClick={() => {
                    setExtendNavbar(!extendNavbar)
                }}> {extendNavbar ? <> &#10005; </> : <> &#8801; </> } </OpenLinkButton>
                <NavbarLinkContainer>
                    <NavbarHomeLink to="/" > Home </NavbarHomeLink>
                    {/* <NavbarLink to="/contract" > Aufträge </NavbarLink> */}
                    <NavbarLink to="/contact" > Kontakt </NavbarLink>
                </NavbarLinkContainer>
            </RightContainer>
        </NavbarInnerContainer>
        { extendNavbar &&
            (
                <NavbarExtendedContainer>
                    <NavbarLinkExtended to="/" > About </NavbarLinkExtended>
                    <NavbarLinkExtended to="/contact" > Kontakt </NavbarLinkExtended>
                    <NavbarLinkExtended to="/contract" > Aufträge </NavbarLinkExtended>
                </NavbarExtendedContainer>
            )
        }

            
            
    </NavbarContainer>
    )
}