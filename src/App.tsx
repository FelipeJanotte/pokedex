import { useContext, useEffect, useState } from "react";
import { Pokemon } from "./components/Pokemon/Pokemon"
import { api } from "./controller";
import { ArrowCircleRight, ArrowCircleLeft, Moon, Sun } from "@phosphor-icons/react";
import { ThemeContext } from "./contexts/ThemeProvider";

function App() {
  const [nextList, setNextList] = useState(0);
  const [limit, setLimit] = useState(9);
  const [list, setList] = useState([{ name: '', url: ''}]);
  useEffect(() => {
    api.Get.ListPokemon(limit, nextList).then(el => {
      setList(el.results);
    });
  }, [nextList]);

  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <div className="header">
        <h1>Pokedex</h1>
        <button className="button-change-theme" type="button" type="checkbox" onClick={() => changeTheme()}>
          {
            theme === 'light' ? (
              <Moon size={32} color="white" weight="light" />
            ) : (
              <Sun size={32} color="white" weight="light" />
            )
          }
        </button>
      </div>
      <main className="main">
      {
        list.map(el => {
          return (
            <Pokemon name={el.name} url={el.url} key={el.name} />
          )
        })
      }
      </main>
      <button className="buttons next-button" onClick={() => {setNextList(nextList + limit)}}><ArrowCircleRight size="64" weight="thin" color="gray" /></button>
      <button className="buttons previous-button" onClick={() => {setNextList(nextList - limit)}} disabled={nextList === 0}><ArrowCircleLeft size="64" weight="thin" color="gray" /></button>
    </div>
  )
}

export default App
