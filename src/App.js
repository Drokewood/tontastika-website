import './App.css';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { TermsOfService } from './pages/TermsOfService';
import { Contact } from './pages/Contact';
import { Error } from './pages/Error';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import { Impressum } from './pages/Impressum';
import { AGB } from './pages/AGB';
import ScrollToTop from './components/ScrollToTop';
import GlobalStyle from './globalStyles';

// Import für Burger Menu Preloading - ALLE Styled Components
import { 
  NavbarLinkExtended, 
  NavbarExtendedContainer,
  BurgerButtonIcon,
  OpenLinkButton 
} from './styles/Navbar.style';


const theme = {
  colors: {
    footer: '#202329',
    navbar: 'beige',
    button: '#b750f2',
    buttonBackground: '#e7d8f0',
    pageBackground: '#f3e7f9', 
    fontColor: '#b750f2',
  }

}


function App() {
  return (
    // das Themeprovider umschließt die gesamte App und stellt das Theme für alle Komponenten bereit, sodass wir keine separaten Imports in jeder Komponente brauchen.
    <ThemeProvider theme = {theme}>
        {/* GLOBAL STYLES: Box-Sizing für die GESAMTE App! */}
        <GlobalStyle />
        
        {/*
        ROUTE PRELOADING: Alle Components einmal rendern (unsichtbar) für Font-Cache
        damit beim ersten Besuch der Route keine Verzögerung durch das Laden der Fonts entsteht
        */}
        <div style={{ display: 'none', position: 'absolute', left: '-9999px' }}>
          <Home />
          <TermsOfService />
          <Contact />
          <Impressum />
          <AGB />
        </div>
        
        <Router>
          {/*
          BURGER MENU PRELOADING: ALLE Burger Menu Components für komplette Cache-Vorbereitung
          display: 'none', position: 'absolute', left: '-9999px' und opacity: 0 sorgen jeweils dafür,
          dass die Elemente nicht sichtbar sind und das Layout der Seite nicht beeinflussen
          aber trotzdem geladen werden können um verzögerungen zu vermeiden.
          Ich habe alle in kombination verwendet, um Probleme bei verschiedenen Libraries und Browsern zu vermeiden.
          */}
          {/*
          display: 'none': Element wird nicht gerendert und ist unsichtbar
          position: 'absolute': Element wird aus dem normalen Layoutfluss entfernt, es schwebt über den anderen Elementen
          left: '-9999px': Element wird außerhalb des sichtbaren Bereichs positioniert
          opacity: 0: Element ist vollständig transparent
          */}
          <div style={{ display: 'none', position: 'absolute', left: '-9999px', opacity: 0 }}>
            {/* Simuliere komplettes Burger Menu mit allen Styled Components */}
            <NavbarExtendedContainer>
              <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
              <NavbarLinkExtended to="/contact">Kontakt</NavbarLinkExtended>
              <NavbarLinkExtended to="/tos">Terms of Service</NavbarLinkExtended>
              <NavbarLinkExtended to="/impressum">Impressum</NavbarLinkExtended>
              <NavbarLinkExtended to="/agb">AGB</NavbarLinkExtended>
            </NavbarExtendedContainer>
            {/*
            die Burger Button Componente wird auch preloaded
            und zwar in beiden states, damit es nicht zu Verzögerungen beim ersten Klick kommt,
            da für jeden State die componenten neu gerendert werden müssten und das wollen wir vorher erledigen
            */}
            <OpenLinkButton>
              <BurgerButtonIcon $extendNavbar={true}>×</BurgerButtonIcon>
            </OpenLinkButton>
            <OpenLinkButton>
              <BurgerButtonIcon $extendNavbar={false}>☰</BurgerButtonIcon>
            </OpenLinkButton>
          </div>
          
          {/* die Scroll to Top Komponente wird an oberster Stelle innerhalb des Routers platziert,
          sodass sie auf jede Routenänderung reagieren kann.
          Die Komponenten innerhalb des Routers wird nacheinander gerendert.
          Da die Komponente kein sichtbares UI rendert, beeinflusst sie das Layout der Seite nicht.
          */}
          <ScrollToTop />
          <Navbar />
            <Routes>
              <Route path='/' element={<Home />  }/>
              <Route path='/tos' element={  <TermsOfService /> }/>
              <Route path='/contact' element={ <Contact /> }/>
              <Route path='/impressum' element={<Impressum />  }/>
              <Route path='/agb' element={<AGB />  }/>
              {/* 
              Wildcard Route MUSS als letzte stehen! Fängt alle nicht-definierten URLs ab und zeigt Error-Page
              die Version von Router Dom ist schlau genug, die Routen auch außerhalb der Reihenfolge zu prüfen, wie sie definiert sind.
              Aber es gehört zur Best Practice, die Wildcard Route ans Ende zu setzen.
               */}
              <Route path='*' element={ <Error /> }/>
            </Routes>
          <Footer />
        </Router>
        


    </ThemeProvider>
    
  );
}

export default App;

