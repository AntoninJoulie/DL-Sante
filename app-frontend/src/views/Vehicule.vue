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
                  <th scope="col">brand name</th>
                  <th scope="col">number model</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="vehicule in vehicules" :key="vehicule._id">
                  <td>{{ vehicule.brand_name }}</td>
                  <td>{{ vehicule.number_model }}</td>
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group" style="margin-bottom: 20px;">
                                  <router-link :to="{name: 'EditVehicule', params: {id: vehicule._id}}" class="btn btn-sm btn-outline-secondary">Edit Vehicule </router-link>
                                  <button class="btn btn-sm btn-outline-secondary" v-on:click="deleteVehicule(vehicule._id)">Delete Vehicule</button>
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
      vehicules: []
    };
  },
  created() {
    this.fetchVehicules();
  },
  methods: {
    },
    fetchVehicules() {
      axios
        .get(`${server.baseURL}/vehicule/vehicules`)
        .then(data => (this.vehicules = data.data));
    },
    deleteVehicule(id) {
      axios
        .delete(`${server.baseURL}/vehicule/delete?vehiculeID=${id}`)
        .then(data => {
          console.log(data);
          window.location.reload();
        });
    }
  };
</script>
