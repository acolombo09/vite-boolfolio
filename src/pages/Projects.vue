<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
  components: {
    ProjectCard,
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

  <div class="container py-3">
    <div class="row my-3">
      <div class="col d-flex justify-content-center my-3" v-for="project in projects">
        <ProjectCard :project="project"></ProjectCard>
      </div>

      <!-- paginazione -->
      <!-- devo aggiungere il fetchdata al click altrimenti mi restituisce l'api e ricarica la pagina-->
      <!-- passo l'url nella function fetchdata e sostituisco :href="pageLink.url" con @click-->
      <!-- aggiungo url anche ad axios così che se ho già l'url non ricarica la pagina -->
      <div class="text-center">
        <a class="btn btn-link"
          v-for="pageLink in pagination.links"
          @click="fetchData(pageLink.url)"
          v-html="pageLink.label"
        ></a>
      </div>
    </div>
  </div>


</template>

<style scoped>
</style>