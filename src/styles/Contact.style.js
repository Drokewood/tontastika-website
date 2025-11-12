import styled from "styled-components"


export const ContactContainer = styled.div`
    padding-top: 99px;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.pageBackground};
    color: ${props => props.theme.colors.fontColor};
`
export const TextContainer = styled.div`
    width: 50%;
`

export const StyledText = styled.div`
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    font-size: large;

    h1 {
        font-family: "PermanentMarker";
        color: ${props => props.theme.colors.fontColor};
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

export const StyledContactFormTextContainer = styled.div`
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    font-size: large;
`

export const ContactFormContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

