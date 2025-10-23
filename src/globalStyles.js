import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* 
  GLOBAL CSS RESET & BOX-SIZING FIX
  Diese Styles gelten für die GESAMTE App - alle Komponenten!
  */
  
  * {
    /* 
    WICHTIG: Box-Sizing! Padding wird in die width EINGERECHNET, nicht hinzugefügt!
    Box-Sizing für alle Elemente!
    Macht CSS vorhersagbar und logisch
    */
    box-sizing: border-box;
  }
  
  /* 
  Optional: Weitere globale Resets
  body {
    margin: 0;
    padding: 0;
  }
  */
`;

export default GlobalStyle;