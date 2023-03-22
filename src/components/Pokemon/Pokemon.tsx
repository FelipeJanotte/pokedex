import { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeProvider';
import { api } from '../../controller'
import { PokemonInterface } from '../../interfaces/Pokemon';
import './styles.css'

export const Pokemon = ({name, url}: {name: string, url: string}) => {
  const [pokemon, setPokemon] = useState({
    height: 0,
    id: 0,
    name: '',
    sprites: {
      back_default: '',
      back_female: '',
      back_shiny: '',
      back_shiny_female: '',
      front_default: '',
      front_female: '',
      front_shiny: '',
      front_shiny_female: '',
    },
    types: [
      {slot: 0, type: {name: '', url: ''}}
    ]
  });

  useEffect(() => {
    api.Get.PokemonByName(name).then((el) => {
      setPokemon(el);
    })
  }, [url]);

  const {theme} = useContext(ThemeContext);

  return (
    <div className={`${name} pokemon ${theme}`}>

      <span className='name'>{ pokemon?.name }</span>
      <img src={pokemon?.sprites?.front_default} alt="" />
      <div className="types">
        <span className={`${pokemon?.types[0].type.name} type`}>{ pokemon?.types[0].type.name }</span>
        <>
          {
            pokemon?.types[1] 
              ? (<span className={`${pokemon?.types[1].type.name} type`}>{ pokemon?.types[1].type.name }</span>) 
              : (<></>)
          }
        </>
      </div>

    </div>
  )
}