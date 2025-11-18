import impressumContent from "../data/content/impressumContent";
import { ImpressumContainer, ImpressumTextContainer, StyledImpressumText } from '../styles/impressum.style'

export const Impressum = () => {
    return (
        <ImpressumContainer>
            <ImpressumTextContainer>
                <h1> Impressum </h1>
                {/* bei Fragen, schau in die Contact.js! */}
                {impressumContent.map((item) => (
                        <StyledImpressumText key={item.id}>
                            <h1> {item.title} </h1>
                            <p>
                                {item.body}
                            </p>
                        </StyledImpressumText>
                ))}
            </ImpressumTextContainer>
        </ImpressumContainer>
    )
    
};