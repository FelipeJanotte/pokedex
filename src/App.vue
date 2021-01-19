<template>
  <div id="app">
    <Preloader/>
    <Header />
    <Pokedex/>
    <Footer/>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Pokedex from './components/Pokedex'
  import Footer from './components/Footer'
  import Preloader from './components/Preloader'

  export default {
    name: 'App',
    components:{
      Header,
      Pokedex,
      Footer,
      Preloader
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
