import { Header } from '../components/Header';
import HomeGallery from '../components/HomeGallery';
import { 
    HomeContainer,
    HomeTextContainer,
    StyledHomeText,
    StyledHomeContainer,
} from '../styles/Home.style'

export const Home = () => {
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
            
                {/* Homepage Gallery mit 3 Placeholder-Bildern */}
                <HomeGallery />
            </StyledHomeContainer>
        </HomeContainer>
    </div>
    )
}