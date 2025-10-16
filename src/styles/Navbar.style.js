import styled from "styled-components"
import { Link } from "react-router-dom"

export const NavbarInnerContainer = styled.div`
    width: auto;
    height: 100px;
    display: flex;
`

export const NavbarContainer = styled.nav`
    position: fixed;
    width: 100%;
    /* props.$extendNavbar wird aus der Navbar.js übermittelt - dort sind weitere Informationen */
    height: ${(props) => (props.$extendNavbar ? "100vh" : "100px")};
    background-color: ${({ theme }) => theme.colors.navbar};
    display: flex;
    flex-direction: column;
`;

export const LeftContainer = styled.div`
    flex: 30%;
    display: flex;
    align-items: center;
`;


export const Image = styled.img`
    margin: 10px;
    width: auto;
    max-height: 80px;
`

export const RightContainer = styled.div`
    flex: 70%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 150px;
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
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    text-decoration: none;
    margin: 10px;
`

export const NavbarLink = styled(Link)`
    color: black;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
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
    font-family: Arial, Helvetica, sans-serif;
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
    /* button disappear above 700px */
    @media (min-width: 800px) {
        display: none;
    }
`
export const NavbarExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`