<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        project: {},
      };
    },
    methods: {
      fetchData() {
        axios.get("http://localhost:8000/api/projects/" + this.$route.params.slug)
        .then(resp => {
          this.project = resp.data;
          // ora devo creare una rotta in api.php che mi recupera lo show dello slug in questo caso
        })
      },
      getImageUrl(projects) {
      return `http://127.0.0.1:8000/storage/${projects.image}`;
      },
    },
    mounted() {
      // this.fetchData();
    }
  }
</script>

<template>

<div class="container py-3 text-center">
    <h1>Benvenuto nella sezione SHOW</h1>
    <h3>Ecco tutti i dettagli del progetto {{ project.title }}</h3>
  </div>

</template>

<style lang="scss"></style>
