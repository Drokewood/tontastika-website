import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Wenn die Seite neu geladen wird, wird die Position der Seite auf den Anfang gesetzt.
    // die Komponente wird in der App.js innerhalb des Routers platziert, sodass sie auf jede Routenänderung reagieren kann.
    window.scrollTo(0, 0);
  }, [pathname]);
    // wenn der User zu /impressum navigiert, greift der useEffect auf den pathname des Routers zu und setzt die Scroll-Position auf den Anfang der Seite des aktuellen Pathnames.
    

  return null;
}

export default ScrollToTop;