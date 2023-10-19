<script>
import axios from "axios";

export default {
  props: {
    project: Object
  },
  methods: {
    getImageUrl(projects) {
      return `http://127.0.0.1:8000/storage/${projects.image}`;
    },
  }
}
</script>

<template>

  <a href="#" class="text-decoration-none">
    <div class="card-box">
      <div class="card h-100" style="width: 300px;">
        <img :src="getImageUrl(project)" class="card-img-top object-fit-contain h-100" :alt="project.title">
        <div class="card-body text-center">
          <h5 class="card-title">{{ project.title }}</h5>
          <p class="card-text">{{ project.type_id }}</p>
        </div>
        <div class="card-footer">
          <router-link :to="{name: 'projects.show', params: {slug: project.slug}}">Vedi Dettagli</router-link>
        </div>
      </div>
    </div>
  </a>

</template>

<style scoped></style>