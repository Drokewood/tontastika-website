import { ContactContainer, ContactFormContainer, TextContainer, StyledText, StyledContactFormTextContainer } from '../styles/Contact.style'
import tosContent from '../data/content/tosContent'
import ContactForm from '../components/ContactForm'



export const Contact = () => {
    return (
        <ContactContainer>
            <TextContainer>
                {/*
                 tosContent wird hier gemappt und jedes Item wird über seine eindeutige ID gemapt
                 diese Id wird als Key jeweils einem Styledtext zugewiesen. die Komponenten innerhalb des StyledText (h1, ul, usw) haben nur noch auf dieses
                 eine Item, mit seine eigenen Properties (title, body, etc.) Zugriff
                */}
                {tosContent.map((item) => (
                    <StyledText key={item.id}>
                        <h1> {item.title} </h1>
                        
                        {item.body.map((listItem, index) => (
                            <ul key={index}>
                                <li>
                                    {listItem}
                                </li>
                            </ul>
                            
                        ))}
                    </StyledText>
                ))}
                <StyledContactFormTextContainer>
                    <StyledText>
                        <p>
                            Schreibe mir eine Mail mit deiner Anfrage.  <br />
                            Hilfreiche Angaben sind dabei der Umfang und die Art des Motives, <br />
                            der gewünschte Verwendungszweck, eventuell eine Deadline und ein Budget. <br />
                            Bei Social Media oder Twitch Aufträgen füge gerne noch deinen Nickname oder Link dazu. <br />
                            Falls ich noch Fragen habe, werde ich sie dir in meinem Reply zusenden. 
                        </p>
                    </StyledText>
                </StyledContactFormTextContainer>
                <ContactFormContainer>
                    <ContactForm />
                </ContactFormContainer>
            </TextContainer>
            
        </ContactContainer>
        
    )
}