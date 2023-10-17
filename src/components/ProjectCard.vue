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

  <div class="card-box">
    <div class="card h-100" style="width: 300px;">
      <img :src="getImageUrl(project)" class="card-img-top object-fit-cover h-100" :alt="project.title">
      <div class="card-body">
        <h5 class="card-title text-center">{{ project.title }}</h5>
      </div>
    </div>
  </div>

</template>

<style scoped></style>