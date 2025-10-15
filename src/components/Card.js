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
                    {list.map((item) => (
                                <ul>
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