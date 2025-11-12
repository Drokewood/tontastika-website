import styled from "styled-components"

export const ImpressumContainer = styled.div`
    padding-top: 99px;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.pageBackground};
    color: ${props => props.theme.colors.fontColor};
`
export const ImpressumTextContainer = styled.div`
    width: 50%;

    h1 {
        font-family: "PermanentMarker";
        color: ${props => props.theme.colors.fontColor};
    }
`

export const StyledImpressumText = styled.div`
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    font-size: large;
    
    
    li {
        font-family: "sagesans";
        color: ${props => props.theme.colors.fontColor};
    }

    p {
        font-family: "sagesans";
        color: ${props => props.theme.colors.fontColor};
    }

`