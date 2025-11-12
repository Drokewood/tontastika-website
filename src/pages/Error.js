import { Link } from 'react-router-dom'
import { useTheme } from 'styled-components'

export const Error = () => {
    const theme = useTheme();
    return (
        <div style={{ 
            paddingTop: '150px', 
            textAlign: 'center', 
            backgroundColor: theme.colors.pageBackground, 
            color: theme.colors.fontColor, 
            minHeight: '100vh',
            fontFamily: 'sagesans'
        }}>
            <h1 style={{ 
                fontFamily: 'PermanentMarker', 
                color: '#be6ded', 
                fontSize: '48px' 
            }}>
                Hoppla! 🏺
            </h1>
            <h2>Diese Seite existiert nicht</h2>
            <p>Wie ein zerbrochener Topf - diese Seite ist leider nicht zu finden!</p>
            {/* Bild von werkeldem Otter? */}
            <Link 
                to="/" 
                style={{ 
                    color: '#be6ded', 
                    fontSize: '18px', 
                    textDecoration: 'none',
                    border: '2px solid #be6ded',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    display: 'inline-block',
                    marginTop: '20px'
                }}
            >
                Zurück zur Startseite
            </Link>
        </div>
    
    )
};