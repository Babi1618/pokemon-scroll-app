import { usePokemonContext } from "../../context/PokemonContext";
import { StyledPokemon } from "./Pokemon.styled";

export const Pokemon = (props: any) => {
  const { getSinglePokemon } = usePokemonContext() as any;

  return (
    <StyledPokemon onClick={() => getSinglePokemon(props.pokemon.url)}>
      {props.pokemon.name}
    </StyledPokemon>
  );
};
