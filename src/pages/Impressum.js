import impressumContent from "../impressumContent";
import { ImpressumContainer, ImpressumTextContainer, StyledImpressumText } from '../styles/impressum.style'

export const Impressum = () => {
    return (
        <ImpressumContainer>
            <ImpressumTextContainer>
                <h1> Impressum </h1>
                {impressumContent.map((item) => (
                        <StyledImpressumText>
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