import React, { useState } from 'react';
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
    const [isFlipped, setIsFlipped] = useState(false);
    const [showBackContent, setShowBackContent] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleCardClick = () => {
        // Animation Lock: Verhindert Klicks während Animation läuft
        if (isAnimating) return;
        
        setIsAnimating(true);
        
        if (!isFlipped) {
            // Flip to back: Animation starten, dann Inhalt nach 300ms wechseln
            setIsFlipped(true);
            setTimeout(() => {
                setShowBackContent(true);
            }, 300);
        } else {
            // Flip to front: Animation starten, dann Inhalt nach 300ms wechseln
            setIsFlipped(false);
            setTimeout(() => {
                setShowBackContent(false);
            }, 300);
        }
        
        // Animation Lock für 300ms verhindert schnelles Klicken und damit verbundenes Flackern
        setTimeout(() => {
            setIsAnimating(false);
        }, 300);
    };

    return (
        <PriceInnerContainer 
        // der classname dient als css Steuerung, das "flipped" wird an die Card.style.js übergeben, wo der Flip-Effekt definiert ist.
        // der name "flipped" muss also mit dem Wert in der Card.style.js übereinstimmen, damit das Event gefunden werden kann.
            className={`${isFlipped ? 'flipped' : ''} ${showBackContent ? 'show-back' : 'show-front'}`}
            onClick={handleCardClick}
            style={{ cursor: isAnimating ? 'wait' : 'pointer' }}
        >
            
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