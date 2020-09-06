<template>
   <div>
        <h4 class="text-center mt-20">
         <small>
         <button class="btn btn-success" v-on:click="navigate()"> View All Vehicules </button>
         </small>
        </h4>
        <div class="col-md-12 form-wrapper">
          <h2> Modification véhicule </h2>
          <form id="create-post-form" @submit.prevent="editVehicule">
               <div class="form-group col-md-12">
                <label for="title"> Nom de la marque </label>
                <input type="text" id="brand_name" v-model="vehicule.brand_name" name="title" class="form-control" placeholder="Enter brand name">
               </div>
               <div class="form-group col-md-12">
                <label for="title"> Numéro de modèle </label>
                <input type="text" id="number_model" v-model="vehicule.number_model" name="title" class="form-control" placeholder="Enter number model">
               </div>
               <div class="form-group col-md-12">
                <label for="title"> Utilisateur </label>
                <select v-model="vehicule.user_id"  id="user_id" name="title" class="form-control">
                  <option v-for="utilisateur in utilisateurs" :key="utilisateur._id" v-bind:value="[utilisateur._id, utilisateur.first_name, utilisateur.last_name]">{{ utilisateur.first_name + " " + utilisateur.last_name }}</option>
                </select>
               </div>
              <div class="form-group col-md-4 pull-right">
                  <button class="btn btn-success" type="submit"> Edit vehicule </button>
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
      utilisateurs: [],
      id: 0,
      vehicule: {}
    };
  },
  created() {
    this.fetchUtilisateurs();
    this.id = this.$route.params.id;
    this.getVehicule();
  },
  methods: {
    fetchUtilisateurs() {
      axios
        .get(`${server.baseURL}/utilisateur/utilisateurs`)
        .then(data => (this.utilisateurs = data.data));
    },
    editVehicule() {
      let vehiculeData = {
        brand_name: this.vehicule.brand_name,
        number_model: this.vehicule.number_model,
        user_id: this.vehicule.user_id[0],
        user_first_name: this.vehicule.user_id[1],
        user_last_name: this.vehicule.user_id[2],
      };
      axios
        .put(
          `${server.baseURL}/vehicule/update?vehiculeID=${this.id}`,
          vehiculeData
        )
        .then(data => {
          router.push({ name: "Vehicule" });
        });
    },
    getVehicule() {
      axios
        .get(`${server.baseURL}/vehicule/vehicule/${this.id}`)
        .then(data => (this.vehicule = data.data));
    },
    navigate() {
      router.go(-1);
    }
  }
};
</script>