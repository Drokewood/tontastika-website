import styled from 'styled-components'

export const PriceInnerContainer = styled.div`
    width: 350px;
    height: 650px;
    background-color: #e7d8f0;
    margin: 30px;
    border-radius: 20px;
    border: solid;
    border-color: #b750f2;
    border-width: 6px;
    display: block;
    overflow: hidden;
    position: relative;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    transition: transform 1s;


    
    &:hover {
        /* die opacity regelt die transparenz der umgedrehten Karte, je niedriger der Wert, desto transparenter wird die Karte dargestellt */
        opacity: 0.9;
        /* die Scale gibt die vergrößerung, also die Hervorherbung der Karte nach der Drehung an  --  die rotateY gibt die weite der rotation in der Y-Achse an, also wie weit die Karte gedreht wird */
        transform: scale(1.05) rotateY(180deg);
        /* der pointer legt das Aussehen des Cursers fest, damit dieser nochmal hervorgehoben wird */
        cursor: pointer;
        box-shadow: 10px 5px 30px 10px ;
    }
    
    `


export const FrontContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

    ${PriceInnerContainer}:hover & {
        visibility: hidden;
    }
    
`

export const BackContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    visibility: hidden;

    ${PriceInnerContainer}:hover & {
        transform: rotateY(180deg);
        visibility: visible;
    }
    
`



export const HeadlinePriceContainer = styled.div`
    width: auto;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #b750f2;

    /* definiert nur elemente innerhalb dieses Containers um */

    h3 {
        font-size: 30pt;
        font-family: "PermanentMarker";
        color: #be6ded;
    }
`
export const StartPriceContainer = styled.div`
    width: auto;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #b750f2;
`


export const MiddlePriceContainer = styled.div`
width: 100%;
height: 100px;
color: white;
display: flex;
align-items: center;
justify-content: center;
background-color: #b750f2;
font-family: "PermanentMarker";/* hier fehlt eine Schrift!------------------------------------------------------------------- */
`

export const PriceListContainer = styled.div`
    width: auto;
    height: 80px;
    color: #b750f2;
    font-size: 15px;
    font-family: "sagesans";
    color: #be6ded;
`
export const BottomStyleContainer = styled.div`
    width: 100%;
    height: 70%;    
    display: flex;
    align-items: end;
    justify-content: end;
`
export const TopStyleContainer = styled.div`
    width: auto;
    height: 30%;
`

export const ImageContainer = styled.div`
width: 350px;
height: 350px;
display: flex;
align-items: end;
justify-content: end;
`

// ----------------------

export const PriceList = styled.ul`

`
export const PriceListItem = styled.li`

`
export const StyledCardText = styled.div`
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 30px;
    font-size: large;
    

    h3 {
        font-family: "PermanentMarker";
        color: #be6ded;
    }

    p {
        font-family: "sagesans";
        color: #be6ded;
    }

`

// ----------------------

// export const H3 = styled.h3`
//     font-size: 30pt;
//     font-family: 'Courier New', Courier, monospace;
//     font-weight: 900;
// `

export const P = styled.p`
    font-size: 25px;
    font-family: sans-serif;

`

export const PreisP = styled.p`
    font-size: 50pt;
    font-family: sans-serif;
`

export const StartPriceP = styled.p`
    font-size: 25px;
    font-family: "sagesans";
    font-weight: 900;        
    color: #be6ded;
`


export const Ul =styled.ul`
    font-size: large;
    font-family: sans-serif;
`
// -----------------------

export const Image = styled.img`
    width: 350px;
    max-height: 350px;
`