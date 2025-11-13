import { 
    ErrorContainer, 
    ErrorTitle, 
    ErrorSubtitle, 
    ErrorText, 
    ErrorLink 
} from '../styles/Error.style';

export const Error = () => {
    return (
        <ErrorContainer>
            <ErrorTitle>Hoppla! 🏺</ErrorTitle>
            <ErrorSubtitle>Diese Seite existiert nicht</ErrorSubtitle>
            <ErrorText>Wie ein zerbrochener Topf - diese Seite ist leider nicht zu finden!</ErrorText>
            {/* Bild von werkeldem Otter? */}
            <ErrorLink to="/">
                Zurück zur Startseite
            </ErrorLink>
        </ErrorContainer>
    );
};