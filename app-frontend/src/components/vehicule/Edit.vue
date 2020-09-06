<template>
   <div>
        <h4 class="text-center mt-20">
         <small>
         <button class="btn btn-success" v-on:click="navigate()"> View All Vehicules </button>
         </small>
        </h4>
        <div class="col-md-12 form-wrapper">
          <h2> Edit Vehicule </h2>
          <form id="create-post-form" @submit.prevent="editVehicule">
               <div class="form-group col-md-12">
                <label for="title"> brand name </label>
                <input type="text" id="brand_name" v-model="vehicule.brand_name" name="title" class="form-control" placeholder="Enter brand name">
               </div>
               <div class="form-group col-md-12">
                <label for="title"> number model </label>
                <input type="text" id="number_model" v-model="vehicule.number_model" name="title" class="form-control" placeholder="Enter number model">
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
      id: 0,
      vehicule: {}
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getVehicule();
  },
  methods: {
    editVehicule() {
      let vehiculeData = {
        brand_name: this.vehicule.brand_name,
        number_model: this.vehicule.number_model,
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