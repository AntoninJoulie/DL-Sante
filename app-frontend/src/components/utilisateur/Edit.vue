<template>
   <div>
        <h4 class="text-center mt-20">
         <small>
         <button class="btn btn-success" v-on:click="navigate()"> View All Utilisateurs </button>
         </small>
        </h4>
        <div class="col-md-12 form-wrapper">
          <h2> Edit Utilisateur </h2>
          <form id="create-post-form" @submit.prevent="editUtilisateur">
               <div class="form-group col-md-12">
                <label for="title"> First Name </label>
                <input type="text" id="first_name" v-model="utilisateur.first_name" name="title" class="form-control" placeholder="Enter firstname">
               </div>
               <div class="form-group col-md-12">
                <label for="title"> Last Name </label>
                <input type="text" id="last_name" v-model="utilisateur.last_name" name="title" class="form-control" placeholder="Enter Last name">
               </div>
              <div class="form-group col-md-4 pull-right">
                  <button class="btn btn-success" type="submit"> Edit utilisateur </button>
              </div>           </form>
        </div>
    </div>
</template>
<script>
import { server } from "../../helper";
import axios from "axios";
import router from "../../router";
export default {
  data() {
    return {
      id: 0,
      utilisateur: {}
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getUtilisateur();
  },
  methods: {
    editUtilisateur() {
      let utilisateurData = {
        first_name: this.utilisateur.first_name,
        last_name: this.utilisateur.last_name,
      };
      axios
        .put(
          `${server.baseURL}/utilisateur/update?utilisateurID=${this.id}`,
          utilisateurData
        )
        .then(data => {
          router.push({ name: "Utilisateur" });
        });
    },
    getUtilisateur() {
      axios
        .get(`${server.baseURL}/utilisateur/utilisateur/${this.id}`)
        .then(data => (this.utilisateur = data.data));
    },
    navigate() {
      router.go(-1);
    }
  }
};
</script>