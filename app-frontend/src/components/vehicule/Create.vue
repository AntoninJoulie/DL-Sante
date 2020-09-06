<template>
   <div>
        <div class="col-md-12 form-wrapper">
          <h2> Create Vehicule </h2>
          <form id="create-post-form" @submit.prevent="createVehicule">
               <div class="form-group col-md-12">
                <label for="title"> Brand name </label>
                <input type="text" id="brand_name" v-model="brand_name" name="title" class="form-control" placeholder="Enter brand name">
               </div>
               <div class="form-group col-md-12">
                <label for="title"> Number model </label>
                <input type="text" id="number_model" v-model="number_model" name="title" class="form-control" placeholder="Enter number model">
               </div>
               <div class="form-group col-md-12">
                <label for="title"> User id </label>
                <select v-model="user_id"  id="user_id" name="title" class="form-control">
                  <option v-for="utilisateur in utilisateurs" :key="utilisateur._id" v-bind:value="utilisateur._id">{{ utilisateur.first_name + " " + utilisateur.last_name }}</option>
                </select>
               </div>
              <div class="form-group col-md-4 pull-right">
                  <button class="btn btn-success" type="submit"> Create Vehicule </button>
              </div>           </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { server } from "../../helper";
import router from "../../router";
export default {
  data() {
    return {
      utilisateurs: [],
      brand_name: "",
      number_model: "",
      user_id: "",

    };
  },
  created(){
    this.fetchUtilisateurs();
  },
  methods: {
    fetchUtilisateurs() {
      axios
        .get(`${server.baseURL}/utilisateur/utilisateurs`)
        .then(data => (this.utilisateurs = data.data));
    },
    createVehicule() {
      let vehiculeData = {
        brand_name: this.brand_name,
        number_model: this.number_model,
        user_id: this.user_id,
      };
      this.__submitToServer(vehiculeData);
    },
    __submitToServer(data) {
      axios.post(`${server.baseURL}/vehicule/create`, data).then(data => {
        router.push({ name: "Vehicule" });
      });
    }
  }
};
</script>