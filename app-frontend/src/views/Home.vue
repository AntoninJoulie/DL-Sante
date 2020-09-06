<template>
    <div class="container-fluid">
      <div class="text-center">
        <h1>Nest Utilisateur List App Tutorial</h1>
       <p> Built with Nest.js, Vue.js and MongoDB</p>
       <div v-if="utilisateurs.length === 0">
            <h2> No utilisateur found at the moment </h2>
        </div>
      </div>

        <div class="">
            <table class="table table-bordered">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Firstname</th>
                  <th scope="col">Lastname</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="utilisateur in utilisateurs" :key="utilisateur._id">
                  <td>{{ utilisateur.first_name }}</td>
                  <td>{{ utilisateur.last_name }}</td>
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group" style="margin-bottom: 20px;">
                                  <router-link :to="{name: 'Edit', params: {id: utilisateur._id}}" class="btn btn-sm btn-outline-secondary">Edit Utilisateur </router-link>
                                  <button class="btn btn-sm btn-outline-secondary" v-on:click="deleteUtilisateur(utilisateur._id)">Delete Utilisateur</button>
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
      utilisateurs: []
    };
  },
  created() {
    this.fetchUtilisateurs();
  },
  methods: {
    fetchUtilisateurs() {
      axios
        .get(`${server.baseURL}/utilisateur/utilisateurs`)
        .then(data => (this.utilisateurs = data.data));
    },
    deleteUtilisateur(id) {
      axios
        .delete(`${server.baseURL}/utilisateur/delete?utilisateurID=${id}`)
        .then(data => {
          console.log(data);
          window.location.reload();
        });
    }
  }
};
</script>