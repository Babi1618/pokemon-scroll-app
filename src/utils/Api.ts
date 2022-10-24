export const fetchPokemon = async (currentPage:number) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${currentPage}&limit=20"`
  ).then((response) => response.json());
  return response.results;
};

export const fetchSinglePokemon = async (url: string) => {
  const response = await fetch(url).then((response) => response.json());
  return response;
};
