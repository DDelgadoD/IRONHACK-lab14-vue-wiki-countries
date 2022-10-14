import axios from 'axios'


//axios es un equivalente a fetch

//creamos una instancia de la pokeapi
// timeout corta la peticion cuando pasa el timepo en ms
const pokeApi = axios.create({
    baseURL: 'https://ih-countries-api.herokuapp.com/countries/',
    timeout: 3000
});

export const getCountry = async (alpha3Code) => {
    const response = await pokeApi.get(alpha3Code);
    //.data es parecido al .json del fetch pero no es una promesa
    return response.data
};

export const getCountries = async () => {
    const response = await pokeApi.get('');
    //.data es parecido al .json del fetch pero no es una promesa
    return response.data
};