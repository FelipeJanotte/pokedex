<template>
  <div id="app">
    <Header />
    <Pokedex/>
    <Footer/>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Pokedex from './components/Pokedex'
  import Footer from './components/Footer'

  export default {
    name: 'App',
    components:{
      Header,
      Pokedex,
      Footer
    }
  }
</script>

<style>
  @font-face {
    font-family: pokemon-hollow ;
    src: url(./../public/fonts/pokemon-hollow.woff);
  }
  @font-face {
    font-family: pokemon-solid ;
    src: url(./../public/fonts/pokemon-solid.woff);
  }

  body{
    background: #34495e;
    height: 100vh;
  }

</style>
