import pokedex from "../../assets/pokedex.gif";
import "./header.css";

export const Header = () => {
  return (
    <header>
      <h1>POKEDEX</h1>
      <img src={pokedex} alt="Pokedex" />
    </header>
  );
};
