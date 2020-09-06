<template>
   <div>
        <div class="col-md-12 form-wrapper">
          <h2> Create Vehicule </h2>
          <form id="create-post-form" @submit.prevent="createVehicule">
               <div class="form-group col-md-12">
                <label for="title"> brand name </label>
                <input type="text" id="brand_name" v-model="brand_name" name="title" class="form-control" placeholder="Enter brand name">
               </div>
               <div class="form-group col-md-12">
                <label for="title"> number model </label>
                <input type="text" id="number_model" v-model="number_model" name="title" class="form-control" placeholder="Enter number model">
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
      brand_name: "",
      number_model: "",
    };
  },
  methods: {
    createVehicule() {
      let vehiculeData = {
        brand_name: this.brand_name,
        number_model: this.number_model,
      };
      this.__submitToServer(vehiculeData);
    },
    __submitToServer(data) {
      axios.post(`${server.baseURL}/vehicule/create`, data).then(data => {
        router.push({ name: "vehicule" });
      });
    }
  }
};
</script>