import axios from "axios";
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeProvider";
import "./pokemoncards.css";
import { PokemonInterface } from "./PokemonInterface";

interface PokemonCardProps {
  url: string;
}

export const PokemonCard = ({ url }: PokemonCardProps) => {
  const { theme } = useContext(ThemeContext);
  const [pokemon, setPokemon] = useState<null | PokemonInterface>(null);

  if (pokemon == null) {
    axios({
      method: "get",
      url: `https://pokeapi.co/api/v2/pokemon/${url}`,
    })
      .then(({ data }) => {
        setPokemon(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  if (pokemon?.sprites.front_default) {
    return (
      <div className={`card ${theme}`}>
        <img src={pokemon?.sprites.front_default} />
        <p>{pokemon?.name}</p>
        <div className="types">
          {pokemon.types.map(({ type }) => {
            return (
              <span key={type.name} className={type.name}>
                {type.name}
              </span>
            );
          })}
        </div>
      </div>
    );
  }

  return <></>;
};
