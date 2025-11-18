import agbContent from '../data/content/agbContent'
import { AGBContainer, AGBTextContainer, StyleAGBText } from '../styles/agb.style'

export const AGB = () => {
    return (
        <AGBContainer>
            <AGBTextContainer>
            <h1> Datenschutz </h1>
            {/* bei Fragen, schau in die Contact.js! */}
            {agbContent.map((item) => (
                <StyleAGBText key={item.id}>
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