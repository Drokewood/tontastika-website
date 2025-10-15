import agbContent from '../agbContent'
import { AGBContainer, AGBTextContainer, StyleAGBText } from '../styles/agb.style'

export const AGB = () => {
    return (
        <AGBContainer>
            <AGBTextContainer>
            <h1> Datenschutz </h1>
            {agbContent.map((item) => (
                <StyleAGBText>
                    <h1> {item.title} </h1>
                    <p>
                        {item.body}
                    </p>
                </StyleAGBText>
            ))}
            </AGBTextContainer>
            
            
        </AGBContainer>
    )
};