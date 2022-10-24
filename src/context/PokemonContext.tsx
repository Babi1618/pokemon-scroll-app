import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { fetchPokemon, fetchSinglePokemon } from "../utils/Api";

export const PokemonContext = createContext({});
export const PokemonContextProvider = (props: PropsWithChildren) => {
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const getPokemonList = async (currentPage: number) => {
    const response = await fetchPokemon(currentPage);
    const otherPokemon: [] = response;
    setPokemon((pokemon) => [...pokemon, ...otherPokemon]);
  };

  const getSinglePokemon = async (url: string) => {
    const response = await fetchSinglePokemon(url);
    const pokemon: any = {
      name: "",
      image: "",
    };
    if (response) {
      (pokemon.name = response.name),
        (pokemon.image = response.sprites.other.dream_world.front_default);
    }
    setSelectedPokemon(() => pokemon);
  };
  const handleScroll = (e: any) => {
    const windowInnerHeight = window.innerHeight;
    const scrollTop = e.target.documentElement.scrollTop;
    const scrollHeight = e.target.documentElement.scrollHeight;
    if (windowInnerHeight + scrollTop + 0.5 > scrollHeight) {
      setCurrentPage(currentPage + 20);
    }
  };
  useEffect(() => {
    getPokemonList(currentPage);
    window.addEventListener("scroll", handleScroll);
  }, [currentPage]);

  return (
    <PokemonContext.Provider
      value={{ pokemon, getSinglePokemon, selectedPokemon, setSelectedPokemon }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};
export const usePokemonContext = () => {
  return useContext(PokemonContext);
};
