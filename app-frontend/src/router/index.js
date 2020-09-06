import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/views/Home';
import VehiculeComponent from '@/views/Vehicule';
import EditUtilisateurComponent from '@/components/utilisateur/Edit';
import CreateUtilisateurComponent from '@/components/utilisateur/Create';
import EditVehiculeComponent from '@/components/vehicule/Edit';
import CreateVehiculeComponent from '@/components/vehicule/Create';
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: {
        name: 'home'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: HomeComponent
    },
    {
      path: '/vehicule',
      name: 'vehicule',
      component: VehiculeComponent
    },
    {
      path: '/createUtilisateur',
      name: 'CreateUtilisateur',
      component: CreateUtilisateurComponent
    },
    {
      path: '/editUtilisateur/:id',
      name: 'EditUtilisateur',
      component: EditUtilisateurComponent
    },
    {
      path: '/createVehicule',
      name: 'CreateVehicule',
      component: CreateVehiculeComponent
    }, {
      path: '/editVehicule/:id',
      name: 'EditVehicule',
      component: EditVehiculeComponent
    },
  ]
});