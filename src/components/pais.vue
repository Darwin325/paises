<template>
  <div class="container">
    <h1>Buscar pais por nombre</h1>
    <input
      type="text" class="form-control"
      v-model="buscarPais"
      placeholder="Buscar pais por nombre"
    >

    <br>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Capital</th>
          <th>Bandera</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(p, index) in paises" :key="p.numericCode">
          <td>{{ index + 1 }}</td>
          <td>{{ p.name }}</td>
          <td>{{ p.capital }}</td>
          <td><img width="90" height="50" :src="p.flag" :alt="`Bandera de ${p.name}`"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

  import countries from '@/services/apiCountries.js';

  export default {
    name: "pais",

    data() {
      return{
        paises: [],
        buscarPais: '',
      }
    },

    computed: {

    },

    watch: {
      buscarPais(newValue){
        if(newValue.length === 0){
          this.getAllCountries();
        }else{
          this.getCountry(newValue);
        }
      }
    },

    methods: {
      getCountry(query){
        countries.getCountryByName(query).then(res =>{
          if (res.length !== 0){
            this.paises = res;
          }
        }).catch(error =>{
          console.log(error);
        })
      },

      getAllCountries(){
        countries.getAllCountries().then(res =>{
            console.log(res);
          this.paises = res;
        }).catch(error =>{
          console.log(error);
        })
      }
    },

    created() {
      this.getAllCountries();
    },
  }
</script>

<style scoped>

</style>
