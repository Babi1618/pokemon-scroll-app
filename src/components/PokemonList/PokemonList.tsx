import { usePokemonContext } from "../../context/PokemonContext";
import { IPokemon } from "../../models/interfaces";
import { Modal } from "../Modal/Modal";
import { Pokemon } from "../Pokemon/Pokemon";
import { StyledPokemonList } from "./PokemonList.styled";

export const PokemonList = () => {
  const { pokemon, selectedPokemon } = usePokemonContext() as any;
  return (
    <>
      <Modal hidden={selectedPokemon ? false : true} />
      <StyledPokemonList>
        {pokemon.map((poke: IPokemon) => {
          return <Pokemon pokemon={poke} key={poke.url} />;
        })}
      </StyledPokemonList>
    </>
  );
};
