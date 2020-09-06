<template>
    <div class="container-fluid">
      <div class="text-center">
        <h1>Table véhicules</h1>
       <p> Produit avec Nest.js, Vue.js and MongoDB</p>
       <div v-if="vehicules.length === 0">
            <h2> Aucun vehicule </h2>
        </div>
      </div>

        <div class="">
            <table class="table table-bordered">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nom de marque</th>
                  <th scope="col">Numéro de modèle</th>
                  <th scope="col">ID utilisateur</th>
                  <th scope="col">Prénom utilisateur</th>
                  <th scope="col">Nom utilisateur</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="vehicule in vehicules" :key="vehicule._id">
                  <td>{{ vehicule._id }}</td>
                  <td>{{ vehicule.brand_name }}</td>
                  <td>{{ vehicule.number_model }}</td>
                  <td>{{ vehicule.user_id }}</td>
                  <td>{{ vehicule.user_first_name }}</td>
                  <td>{{ vehicule.user_last_name }}</td>
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group" style="margin-bottom: 20px;">
                                  <router-link :to="{name: 'EditVehicule', params: {id: vehicule._id}}" class="btn btn-sm btn-outline-secondary">Modification vehicule </router-link>
                                  <button class="btn btn-sm btn-outline-secondary" v-on:click="deleteVehicule(vehicule._id)">Suppression vehicule</button>
                                </div>
                              </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
</template>

<script>
import { server } from "../helper";
import axios from "axios";
export default {
  data() {
    return {
      vehicules: [],
    };
  },
  created() {
    this.fetchVehicules();
  },
  methods: {
    fetchVehicules() {
      axios
        .get(`${server.baseURL}/vehicule/vehicules`)
        .then((data) => (this.vehicules = data.data));
    },
    deleteVehicule(id) {
      axios
        .delete(`${server.baseURL}/vehicule/delete?vehiculeID=${id}`)
        .then((data) => {
          console.log(data);
          window.location.reload();
        });
    },
  },
};
</script>
