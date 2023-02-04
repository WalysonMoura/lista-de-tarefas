import { createGlobalStyle } from "styled-components";
import { Colors } from "./colors";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}


body {
  background: ${Colors.gray600};
  color: ${Colors.gray100};
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

button {
  cursor: pointer;
}
`;

export default GlobalStyle;
