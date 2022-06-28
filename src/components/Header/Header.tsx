import { useContext } from "react";
import pokedex from "../../assets/pokedex.gif";
import { ThemeContext } from "../../contexts/ThemeProvider";
import "./header.css";

export const Header = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  function handleClick() {
    changeTheme(theme);
  }
  return (
    <header className={theme}>
      <div className="title">
        <h1>POKEDEX</h1>
        <img src={pokedex} alt="Pokedex" />
        <button
          onClick={handleClick}
          type="button"
          title="Mudar tema"
          className="change-theme-btn"
        ></button>
      </div>
      <span>
        Feito por:{" "}
        <a href="https://github.com/FelipeJanotte" target={"_blank"}>
          Felipe Augusto Janotte
        </a>
      </span>
    </header>
  );
};
