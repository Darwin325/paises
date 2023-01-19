import axios from "axios";

const restApi = "https://restcountries.com/v2";

const URL = `${restApi}/name/{name}`;

// function getCountyByName
const cuntries = {
  getCountryByName: name => {
    let url = URL.replace("{name}", name);

    return axios
      .get(url)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },

  getAllCountries: () => {
    return axios
      .get(`${restApi}/all`)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};

export default cuntries;
