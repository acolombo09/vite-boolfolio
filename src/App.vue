<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        projects: [],
        pagination: {}
      };
    },
    methods: {
      fetchData() {
        axios.get("http://127.0.0.1:8000/api/projects")
        .then((response) => {
          // console.log(response);
          // prima prendo i dati per la lista dei projects tramite il data del data
          this.projects = response.data.data;

          // cancello la chiave data nell'oggetto data così nel
          // restituire la paginazione non ho tutto l'array di dati
          delete response.data.data;
          //salvo i dati della paginazione (sempre postman)
          this.pagination = response.data
        })
      }
    },
    mounted() {
      this.fetchData();
    }
  }
</script>

<template>
  <main>
    <div class="container">
      <h1>Hello from my Vue front office</h1>
      <p>Take a look at my projects</p>
    </div>
  </main>
  
</template>

