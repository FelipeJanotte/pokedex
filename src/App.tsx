import { useContext } from "react";
import { Header } from "./components/Header/Header";
import { Pokedex } from "./components/Pokedex/Pokedex";
import { ThemeContext } from "./contexts/ThemeProvider";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <Header />
      <Pokedex />
    </div>
  );
}

export default App;
