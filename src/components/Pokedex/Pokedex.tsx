import axios from "axios";
import { useState } from "react";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import "./pokedex.css";
import { PokedexInterface } from "./PokedexInterface";

export const Pokedex = () => {
  const [pokedex, setPokedex] = useState<null | PokedexInterface>(null);

  if (pokedex === null) {
    axios({
      method: "get",
      url: "https://pokeapi.co/api/v2/pokemon?limit=905&offset=0",
    })
      .then(({ data }) => {
        setPokedex(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <section className="pokedex">
      <div className="cards">
        {pokedex?.results.map((el) => {
          return <PokemonCard key={el.name} url={el.name} />;
        })}
      </div>
    </section>
  );
};
