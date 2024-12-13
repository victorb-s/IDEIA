import { ItemContainer, ItemText, Icon } from "./styles";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
function Sugestaoitem({ text, handleSelectTitle }) {
  return (
    <ItemContainer onClick={() => handleSelectTitle(text)}>
        <Icon icon={faEdit} alt="Ícone"/> 
      <ItemText>{text}</ItemText>
    </ItemContainer>
  );
}

export default Sugestaoitem;