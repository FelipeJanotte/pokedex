<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
  import Header from './components/Header'

  export default {
    name: 'App',
    components:{
      Header
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
