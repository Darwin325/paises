import axios from 'axios';

const URL = 'https://restcountries.eu/rest/v2/name/{name}';

// function getCountyByName
const cuntries = {

  getCountryByName: (name)=> {
    let url = URL.replace('{name}', name);

    return axios.get(url).then(response =>{
      return response.data;
    }).catch(error =>{
      console.log(error)
    })
  },

  getAllCountries: () =>{
    return axios.get('https://restcountries.eu/rest/v2/all').then(response =>{
      return response.data;
    }).catch(error =>{
      console.log(error)
    })
  },

};

export default cuntries;
