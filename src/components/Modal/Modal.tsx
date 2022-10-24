import { usePokemonContext } from "../../context/PokemonContext";
import {
  StyledModal,
  StyledModalCloseIcon,
  StyledModalContent,
  StyledModalTitle,
} from "./Modal.styled";

export const Modal = (props: any) => {
  const { selectedPokemon, setSelectedPokemon } = usePokemonContext() as any;
  return (
    <StyledModal hidden={props.hidden}>
      <StyledModalContent>
        <StyledModalCloseIcon onClick={() => setSelectedPokemon(null)}>
          X
        </StyledModalCloseIcon>
        <img src={selectedPokemon ? selectedPokemon.image : ""} />
        <StyledModalTitle>
          {selectedPokemon && selectedPokemon.name}
        </StyledModalTitle>
      </StyledModalContent>
    </StyledModal>
  );
};
