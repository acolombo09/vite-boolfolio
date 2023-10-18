<script>

export default {

}
</script>

<template>

  <div class="container">
    <div class="text-center">
      <h1>404</h1>
      <h2>OOPS, mi sa che ti sei perso!</h2>
    </div>
    
    <div class="text-center">
      <h3>Torna alla HomePage</h3>
      <button class="btn btn-outline-primary"><router-link :to="{name: 'home'}">Home</router-link></button>
    </div>

  </div>

</template>

<style scoped>
</style>