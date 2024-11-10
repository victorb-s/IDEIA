import { ItemContainer, ItemText, Icon } from "./styles";
import icon_lapis from '../../../assets/icon_lapis.svg';

// eslint-disable-next-line react/prop-types
function Sugestaoitem({ text }) {
  return (
    <ItemContainer>
        <Icon src={icon_lapis} alt="Ícone" /> 
      <ItemText>{text}</ItemText>
    </ItemContainer>
  );
}

export default Sugestaoitem;