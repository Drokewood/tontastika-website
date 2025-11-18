import priceCardContent from '../data/content/priceCardContent'
import textContent from '../data/content/textContent';
import Card from '../components/Card';
import { 
    TermsOfServiceContainer,
    PriceContainer,
    ContentContainer,
    StyledTermsOfServiceText,
    TextContainer,

} from '../styles/TermsOfService.style'

export const TermsOfService = () => {
    return (
        <TermsOfServiceContainer>
                <ContentContainer>
                    <TextContainer>
                        <StyledTermsOfServiceText> 
                            <h1> Preisübersicht </h1>
                            <p>
                                Hier findest Du eine kleine Übersicht an Preisen für meine beliebtesten Angebote. Dein Wunsch ist nicht dabei?  
                                Nicht so schlimm, schreibe einfach eine Mail an ~~~.art@gmail.com mit deinen Vorstellungen und ich mache dir nach Absprache ein individuelles Angebot  zurecht. 
                                Meine aktuelle To Do Liste findest du hier (externer Link). 
                                Wichtig: Alle angegebenen Preise sind als Netto gekennzeichnet. Auf der Rechnung fallen noch zusätzlich 7% USt (Umsatzsteuer) an.
                            </p>
                        </StyledTermsOfServiceText>
                    </TextContainer>
                
                    <PriceContainer>
                        {/* bei Fragen, schau in die Contact.js! */}
                        {priceCardContent.map((item, index) => (
                            // die Card.js ist nur der Bauplan, wie die Preiskarten aussehen sollen. Welche Daten dort reinkommen, wird hier festgelegt und übergeben.
                                <Card key={index} item={item} /> 
                            ))}
                        {console.log("DATA", priceCardContent)}
                    </PriceContainer>

                    <TextContainer>
                        <StyledTermsOfServiceText>
                            {textContent.map((item, index) => (
                                    <div key={index}>
                                        <h1> {item.title} </h1>
                                        <p> {item.body} </p>
                                    </div>
                                ))}
                        </StyledTermsOfServiceText>
                    </TextContainer>
                </ContentContainer>
        </TermsOfServiceContainer> 
    )

}