import { Header } from '../components/Header';
import InstaCard from '../components/InstaCard';
import { 
    HomeContainer,
    HomeTextContainer,
    StyledHomeText,
    StyledInstaFeed,
    StyledHomeContainer,

} from '../styles/Home.style'
import { useState, useEffect } from 'react';

export const Home = () => {

    const [instaItems, setInstaItems] = useState([])

    const userId = process.env.REACT_APP_USER_ID
    const accessToken = process.env.REACT_APP_ACCESS_TOKEN
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
    // TODO:
    // Feed wird bei jedem Neuladen neu geholt
    // Feed wird auch beim Navigieren jedesmal neu geladen
    useEffect(() => {

        const doFetch = async () => {
            if(!userId || !accessToken) {
                console.log("Die UserId oder das AccessToken sind ungültig!", {userId, accessToken})
            }
        
            const res = await fetchInstaData(userId, accessToken)
        
            // überprüft ob res einen Wert hat und wenn nicht wird eine Fehlermeldung ausgegeben, statt einen Fehler zu werfen und die Seite zu crashen
            if(res){
                // der Response res wird gesliced um nur die ersten 9 Elemente zu erhalten
            // dann wird für jedes Item, fetchImages, aufgerufen und die Ergebnisse im fetchPromises Array gespeichert
            const fetchPromises = res.slice(0, 9).map(item => fetchImages(item.id, accessToken));
        
            // fetchPromises wird mit Promise.all aufgelöst und die Ergebnisse in instaItemsResults gespeichert
            // promis.all wartet bis alle Promises im Array eingetroffen sind
            const instaItemsResults = await Promise.all(fetchPromises);
        
            // checkt für jedes Item in instaItemsResults ob es ein Video ist, wenn nicht wird es in instaItems, mit den Werten imageURL und permalink, gespeichert
            instaItemsResults.forEach(instaItem => {
                if(instaItem.media_type !== 'VIDEO') {
                    setInstaItems(instaItems => [...instaItems, {imageURL: instaItem.media_url, permalink: instaItem.permalink}])
                }
            });
            }else{
                console.log("Keine Daten gefunden!")
            }
            
        }

        doFetch()
        // die [] bewirkt EINMALIGES laden der Seite!
        setInstaItems([])

    }, [accessToken, userId])


    const fetchInstaData = async (userId, accessToken) => {

        const mediaUrl  = `https://graph.instagram.com/${userId}/media?access_token=${accessToken}`

        try{
            const res =  await fetch(mediaUrl).then(res => { return res.json()}).then(res => {return res.data})
            return res
        }catch(err){
            console.log(err)
        }
    }

    const fetchImages = async (id, accessToken) => {

        const mediaUrl  = `https://graph.instagram.com/${id}?access_token=${accessToken}&fields=media_url,permalink,media_type`

        try{
            const res =  await fetch(mediaUrl).then(res => {return res.json()})            
            return res
        }catch(err){
            console.log(err)
        }
    }


    return (
    <div>
        <Header />
        <HomeContainer>
            <StyledHomeContainer>
                <HomeTextContainer>
                    <StyledHomeText>
                        <p> Willkommen bei Tontastika! </p>
                        <h1> Gartenkeramik und Mehr </h1>
                        <p> Auf dieser Seite kommen Garten- und Keramikfreunde auf ihre Kosten. Ich kreiere immer neue, schräge Vögel und Fische, Umtöpfe und andere Figuren, die frischen Wind in den manchmal tristen Alltag bringen.
                        </p>
                    </StyledHomeText>
                </HomeTextContainer>
            
                <StyledInstaFeed>
                    {instaItems.map((item, index) => (
                        <InstaCard key={index} item={item} />
                    ))}
                    
                    
                </StyledInstaFeed>
            </StyledHomeContainer>
        </HomeContainer>
    </div>
    )
}