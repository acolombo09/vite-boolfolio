<script>
  import axios from 'axios';
  import TheHeader from './components/TheHeader.vue';

  export default {
    components: {
      TheHeader
    },
    data() {
      return {
        projects: [],
        // per tenere traccia della pagina in cui mi trovo
        pagination: {}
      };
    },
    methods: {
      fetchData(url) {
        axios.get(url ?? "http://127.0.0.1:8000/api/projects")
        .then((response) => {
          // console.log(response);
          // prima prendo i dati per la lista dei projects tramite il data del data
          this.projects = response.data.data;

          // cancello la chiave data nell'oggetto data così nel
          // restituire la paginazione non ho tutto l'array di dati
          delete response.data.data;
          //salvo i dati della paginazione (sempre postman)
          // console.log(this.pagination)
          this.pagination = response.data
        });
      },
    },
    mounted() {
      this.fetchData();
    }
  }
</script>

<template>
  <TheHeader></TheHeader>

  <main>
    <!-- è come il segnaposto (yield) di blade per i contenuti -->
    <router-view></router-view>
    <!-- sposto tutto l'html in pagina projects che sarà la mia index -->
  </main>

  <footer class="bg-dark py-5 border-top">
    <div class="container">
      <h3>Footer</h3>
    </div>
  </footer>
</template>

<style lang="scss"></style>
