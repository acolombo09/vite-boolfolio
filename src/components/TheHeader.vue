<script>
  import axios from 'axios';
  

  export default {
    // props: {
      
    // },
    // data() {
    //   return {
        
    //   };
    // },
    // methods: {
      
    // },
    // mounted() {
      
    // }
  }
</script>

<template>
  <header class="py-3">
    <nav class="container-fluid">
      <div class="d-flex align-items-center justify-content-between">
        <a href="#" class="d-flex align-items-center link-body-emphasis text-decoration-none">
          <h3 class="text-success fw-bold">BOOLFOLIO</h3>
        </a>

        <ul class="nav col-12 col-lg-auto mb-0 align-items-center">
          <li><a href="#" class="nav-link px-2 link-light"><h5>Home</h5></a></li>
          <li><a href="#" class="nav-link px-2 link-light"><h5>Projects</h5></a></li>
          <li><a href="#" class="nav-link px-2 link-light"><h5>Blog</h5></a></li>
          <li><a href="#" class="nav-link px-2 link-light"><h5>Newsletter</h5></a></li>
          <li><a href="#" class="nav-link px-2 link-light"><h5>Contact Me</h5></a></li>
        </ul>
        
        <div class="col-12 col-lg-auto">
          <div class="d-flex align-items-center">
            <div class="input-group input-group-sm me-3">
              <input type="text" class="form-control" placeholder="Search here..."/>
              <button class="btn btn-outline-light" type="button" id="button-addon2"
              >Search</button>
            </div>
            <div class="align-items-center pt-2">
              <ul class="list-unstyled">
                <li><a class="text-light" href="http://127.0.0.1:8000/login">Login</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>

</template>

<style lang="scss" scoped>

@use "../style/partials/variables" as *;

header{
  min-height: 60px;
}

</style>