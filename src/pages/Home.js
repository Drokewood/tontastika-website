import { Header } from '../components/Header';
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
            
                {/* TODO: Homepage Gallery (9 Bilder) wird hier eingefügt */}
                <div style={{
                    padding: '40px 20px',
                    textAlign: 'center',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    margin: '20px 0'
                }}>
                    <h3>🏺 Best-of Gallery kommt hier hin!</h3>
                    <p>9 handverlesene Bilder der schönsten Tontastika-Arbeiten</p>
                </div>
            </StyledHomeContainer>
        </HomeContainer>
    </div>
    )
}