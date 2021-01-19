<template>
  <transition name="fade-transition">
    <div v-if="show" class="preloader">
      <div class="logo">
        <img src="./../assets/pokeball.svg" alt="Pokebola rolando">
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name:'preloader',
    data(){
      return{
        show:true
      }
    },
    mounted(){
      this.showToggle()
    },
    methods:{
      showToggle(){
        setTimeout(() => {
          this.show = false
        }, 1500)
      }
    }
  }
</script>

<style scoped>
  .fade-transition-enter-active,
  .fade-transition-leave-active{
    transition: opacity 0.3s ease-in-out ;
  }
  .fade-transition-enter,
  .fade-transition-leave-to{
    opacity: 0;
  }
  .preloader{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 999;
    background: white; 
  }

  img{
    transition: 0.5s;
    animation: rotating 1s linear infinite;
  }
  @keyframes rotating {
    from{
      transform: rotate(0deg);
    }
    to{
      transform: rotate(360deg);
    }
  }
</style>