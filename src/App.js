import { Landing } from "./landing";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  *{
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;

  }
`;
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Landing />
    </div>
  );
}

export default App;
