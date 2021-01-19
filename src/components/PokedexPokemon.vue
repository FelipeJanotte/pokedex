<template>
  <div class="col-3 ">
    <p>#{{pokemonNumber}}</p>
    <img :src="imgName" :alt="imgInfo" width="100">
    <p>{{pokemonName}}</p>
    <p><i :class="pokemonTypes[0]">{{pokemonTypes[0]}}</i>  <i :class="pokemonTypes[1]">{{pokemonTypes[1]}}</i> </p>
  </div>

</template>

<script>
export default {
  props:{
    imgName: {
			type: String,
			required: true,
		},
		imgInfo: {
			type: String,
			requiered: true,
		},
		pokemonName: {
			type: String,
			requiered: true,
		},
		pokemonNumber: {
			type: Number,
			requiered: true,
    },
    pokemonTypes:{
      type: Array,
      requiered:true
    }
  }
};
</script>

<style scoped>


  .col-3{
    color: white;
    margin: 10px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    width: 150px;
    background: #353b48b4;
    border-radius: 10px;
  }
  p{

  }
  p > i{
    padding: 5px 10px;
    border-radius: 2rem;
  }
  .fire{
    background: #e67e22;
    text-transform: capitalize;
  }
  .water{
    background: #2980b9;
    text-transform: capitalize;
  }
  .grass{
    background: #2ecc71;
    text-transform: capitalize;
  }
  .poison{
   background: #8e44ad; 
    text-transform: capitalize;
  }
  .flying{
    background: #a890f0;
    text-transform: capitalize;
  }
  .bug{
    background:#a8b820;
    text-transform: capitalize;
  }
  .normal{
    background: #a8a878;
    text-transform: capitalize;
  }
  .electric{
    background: #f1c40f;
    text-transform: capitalize;
  }
  .ground{
    background:#EAB543;
    text-transform: capitalize;
  }
  .fairy{
    background: #fd79a8;
    text-transform: capitalize;
  }
  .fighting{
    background: #c0392b;
    text-transform: capitalize;
  }
  .psychic{
    background: #e84393;
    text-transform: capitalize;
  }
  .rock{
    background: #cc8e35;
    text-transform: capitalize;
  }
  .steel{
    background: #bdc3c7;
    text-transform: capitalize;
  }
  .ice{
    background:#34e7e4;
    text-transform: capitalize;
  }
  .ghost{
    background:#6D214F;
    text-transform: capitalize;
  }
  .dragon{
    background: #3B3B98;
    text-transform: capitalize;
  }

</style>