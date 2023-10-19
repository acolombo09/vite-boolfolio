<script>
import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      errors: null,
      success: null,
      loading: false,
    };
  },
  methods: {
    onFormSubmit() {
      axios
        .post("http://localhost:8000/api/contacts", this.formData)
        .then(resp => {
          this.success = true;
          this.errors = null;
        })
        .catch(e => {
          this.errors = e.response?.data?.message ?? e.message;
        });
    }
  }
};
</script>

<template>

  <div class="container py-3 text-center">
    <div class="row">
      <div class="col-7 mx-auto">
        <div class="my-3">
          <h1>Benvenuto nella sezione CONTACTS</h1>
          <h3>Ecco come potrai contattarmi</h3>
        </div>
        
        <div class="my-5">
          <!-- prevent per evitare il ricaricamento della pagina -->
          <form @submit.prevent="onFormSubmit" v-if="!success">
            <div class="mb-3">
              <label>Nome</label>
              <input type="text" class="form-control" v-model="formData.name">
            </div>
            
            <div class="mb-3">
              <label>Email</label>
              <input type="text" class="form-control" v-model="formData.email">
            </div>

            <div class="mb-3">
              <label>Messaggio</label>
              <textarea type="text" class="form-control" v-model="formData.message"></textarea>
            </div>

            <button class="btn btn-primary" type="submit">Invia</button>
          </form>
          
          <div class="alert altert-success" v-else>
            Grazie per avermi contattato, risponderò asap!
          </div>

          <div class="alert altert-danger" v-if="errors">
            Sembra che qualcosa sia andato storto: {{ errors }}
          </div>
        </div>

      </div>
    </div>
    
  </div>

</template>

<style scoped>
</style>