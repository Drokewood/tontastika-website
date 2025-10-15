import { createGlobalStyle } from "styled-components";
import Permanent_Marker from "./fonts/Permanent_Marker/PermanentMarker-Regular.ttf"
import SageSans from "./fonts/SageSans/sagesans-Regular.ttf"
import Bosk from "./fonts/Bosk/Bosk.ttf"


const FontStyles = createGlobalStyle`

@font-face {
  font-family: "PermanentMarker";
  src: url(${Permanent_Marker}) format("truetype");
}

@font-face {
  font-family: "SageSans";
  src: url(${SageSans}) format("truetype");
}

@font-face {
  font-family: "Bosk";
  src: url(${Bosk}) format("truetype");
}
`;

export default FontStyles;