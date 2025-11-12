import styled from "styled-components"

export const TermsOfServiceContainer = styled.div`
    padding-top: 99px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    background-color: ${props => props.theme.colors.pageBackground};
`


export const ContentContainer = styled.div`
    max-width: 80em;
    margin-left: auto;
    margin-right: auto;
`
// export const TextContainer = styled.div`
//     max-width: 75em;
//     height: auto;
    
// `
 
export const TextContainer = styled.div`
    max-width: 1200px;
    margin: auto;
    height: auto;
    
`


export const StyledTermsOfServiceText = styled.div`
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 30px;
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

export const PriceContainer = styled.div`
    width: 100%;
    display: flex;
    margin-top: 30px;
    flex-wrap: wrap;
    justify-content: center;
`



