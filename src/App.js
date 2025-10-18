import './App.css';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { Contract } from './pages/Contract';
import { Contact } from './pages/Contact';
import { Error } from './pages/Error';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import { Impressum } from './pages/Impressum';
import { AGB } from './pages/AGB';
import ScrollToTop from './components/ScrollToTop';


const theme = {
  colors: {
    footer: '#202329',
    navbar: 'beige',
    button: '#b750f2',
    buttonBackground: '#e7d8f0'
  }

}


function App() {
  return (
    <ThemeProvider theme = {theme}>
        <Router>
          {/* die Scroll to Top Komponente wird an oberster Stelle innerhalb des Routers platziert,
          sodass sie auf jede Routenänderung reagieren kann.
          Die Komponenten innerhalb des Routers wird nacheinander gerendert.
          Da die Komponente kein sichtbares UI rendert, beeinflusst sie das Layout der Seite nicht.
          */}
          <ScrollToTop />
          <Navbar />
            <Routes>
              <Route path='/' element={<Home />  }/>
              <Route path='/contract' element={  <Contract /> }/>
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

