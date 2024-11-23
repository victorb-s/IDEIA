import { NavContainer, NavButton } from "./styles";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function NavBotao() {
  return (
    <NavContainer>
      <NavButton icon={faChevronLeft} />
      <NavButton icon={faChevronRight} />
    </NavContainer>
  );
}

export default NavBotao;
