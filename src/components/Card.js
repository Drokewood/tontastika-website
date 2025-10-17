import { PriceInnerContainer,
    HeadlinePriceContainer,
    FrontContainer, 
    BackContainer,
    MiddlePriceContainer,
    PreisP,
    StartPriceP,
    StartPriceContainer,
    ImageContainer, 
    StyledCardText,
    Image,
    BottomStyleContainer,
    TopStyleContainer,
    PriceListContainer } from '../styles/Card.style'



export default function Card({ item: { title, smallTitle, price, list, body, image } }) {
    return (
        <PriceInnerContainer>
            
            <FrontContainer>
                <TopStyleContainer>
                    <HeadlinePriceContainer>
                        <h3> {title} </h3>
                    </HeadlinePriceContainer>
                    <StartPriceContainer>
                        <StartPriceP>
                            {smallTitle} 
                        </StartPriceP>
                    </StartPriceContainer>
                    <MiddlePriceContainer>
                        <PreisP>{price}</PreisP>
                    </MiddlePriceContainer>
                    <PriceListContainer>
                    {list.map((item, index) => (
                        //wir übergeben hier ein item was an einen index im gebunden ist, um Fehler im browser, aufgrund von nicht eindeutigen keys zu vermeiden.

                        // die Card.js ist nur der Bauplan, wie die Preiskarten aussehen sollen.
                        // Welche Daten dort reinkommen, wird von der jeweiligen Page (z.B. Contract.js) bestimmt und übergeben.
                        // LEGO-Pattern: Card.js = LEGO-Stein (Bauplan), Contract.js = LEGO-Bauwerk (nutzt viele Steine)
                                <ul key={index}>
                                    <li>
                                        {item}
                                    </li>
                                </ul>
                            ))}
                    </PriceListContainer>
                </TopStyleContainer>
                
                <BottomStyleContainer>
                    <ImageContainer>
                    <Image src={`./images/${image}`} /> 
                    </ImageContainer>  
                </BottomStyleContainer>
            </FrontContainer>
            <BackContainer>
                <StyledCardText>
                    <h3> {title} </h3>
                    <p> {body} </p>
                </StyledCardText>
            </BackContainer>
        </PriceInnerContainer>
    )
}