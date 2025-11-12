import styled from "styled-components";
import { Link } from "react-router-dom"

export const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.footer};
    color: ${({ theme }) => theme.colors.fontColor};
    padding: 10px 0px 10px;
    width: 100%;


    /* entfernt die Striche vor den Stichpunkten */
    ul {
        list-style-type: none;
    }

    ul li {
        margin-bottom: 20px;
        margin-right: 50px;
        margin-left: 50px;
        text-align: left;
    }

    p {
        text-align: right;
        margin-right: 50px;
    }

    

`

export const FooterContainer = styled.div`
    width: 100%;
    height: auto;
`

export const FooterLink = styled(Link)`
    color: ${({ theme }) => theme.colors.fontColor};
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    text-decoration: none;
    margin: 10px;
`