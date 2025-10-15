import priceCardContent from '../priceCardContent'
import textContent from '../textContent';
import Card from '../components/Card';
import { 
    ContractContainer,
    PriceContainer,
    ContentContainer,
    StyledContractText,
    TextContainer,

} from '../styles/Contract.style'

export const Contract = () => {
    return (
        <ContractContainer>
                <ContentContainer>
                    <TextContainer>
                        <StyledContractText> 
                            <h1> Preisübersicht </h1>
                            <p>
                                Hier findest Du eine kleine Übersicht an Preisen für meine beliebtesten Angebote. Dein Wunsch ist nicht dabei?  
                                Nicht so schlimm, schreibe einfach eine Mail an ~~~.art@gmail.com mit deinen Vorstellungen und ich mache dir nach Absprache ein individuelles Angebot  zurecht. 
                                Meine aktuelle To Do Liste findest du hier (externer Link). 
                                Wichtig: Alle angegebenen Preise sind als Netto gekennzeichnet. Auf der Rechnung fallen noch zusätzlich 7% USt (Umsatzsteuer) an.
                            </p>
                        </StyledContractText>
                    </TextContainer>
                
                    <PriceContainer>
                        {priceCardContent.map((item, index) => (
                                <Card key={index} item={item} /> 
                            ))}
                        {console.log("DATA", priceCardContent)}
                    </PriceContainer>

                    <TextContainer>
                        <StyledContractText>
                            {textContent.map((item, index) => (
                                    <div>
                                        <h1> {item.title} </h1>
                                        <p> {item.body} </p>
                                    </div>
                                ))}
                        </StyledContractText>
                    </TextContainer>
                </ContentContainer>
        </ContractContainer> 
    )

}