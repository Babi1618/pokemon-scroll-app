import { PokemonContextProvider } from "../../context/PokemonContext";
import { PokemonList } from "../PokemonList/PokemonList";
import { StyledMain } from "./Main.styled";
export const Main = () => {
  return (
    <StyledMain>
      <PokemonContextProvider>
        <PokemonList />
      </PokemonContextProvider>
    </StyledMain>
  );
};
