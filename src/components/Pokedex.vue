<template>
  <main>
    <div class="row">
      <PokedexPokemon
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        :pokemon-number="pokemon.id"
        :pokemon-name="pokemon.pokemonName"
        :img-name="pokemon.img"
        :img-info="pokemon.imgInfo"
        :pokemon-types="pokemon.types"
      />
    </div>
  </main>
</template>

<script>
  import PokedexPokemon from './PokedexPokemon'
  import { mapGetters } from 'vuex';
  
  export default {
    components:{
      PokedexPokemon
    },
    computed: {
		...mapGetters({
			pokemons: 'getPokemons',
		}),
	},
  }
</script>

<style scoped>
  main{
    background: #34495e;
    height: 100%;
  }
  .row{
    width: 100%;
    justify-content: center;
  }

  .container{
    display: grid;
  }

  .col-4 > img{
    width: 100%;
  }


</style>