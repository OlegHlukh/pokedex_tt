const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
const IMG_URL = 'https://pokeres.bastionbot.org/images/pokemon/';
const TYPE_URL = 'https://pokeapi.co/api/v2/type';

const request = async(baseUrl, path) => {
  const response = await fetch(`${baseUrl}${path}`);

  const pockemonList = await response.json();

  return pockemonList.results;
}

export const getIdFromUrl  = async(url) => {
  const response = await fetch(url);

  const result = await response.json();

  return result.results;
}
export const getPokemonWithLimit = (limit, offset) => request(BASE_URL,`?limit=${limit}&offset=${offset}`);
export const getPokemonImgUrl = (id) => `${IMG_URL}${id}.png`;
export const getPokemonType = (id) => request(TYPE_URL, id);

export const getPokemonByName = async(name) => {
  const response = await fetch(`${BASE_URL}${name}`);

  return response.json()
};