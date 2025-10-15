import {
    StyledInstaCardContainer,
    ImageContainer,
    Image,
    } from '../styles/InstaCard.style'

export default function InstaCard({ item: { permalink, imageURL } }) {
    return (
        <StyledInstaCardContainer>
                <ImageContainer>
                    <Image src={imageURL} /> 
                    
                    {/* <p> {permalink} </p> */}
                    
                </ImageContainer> 
        </StyledInstaCardContainer>
    )
}