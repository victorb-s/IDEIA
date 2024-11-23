import Switch from "react-switch";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Container } from "./style";

// eslint-disable-next-line react/prop-types
export const ThemeToggler = ({toggleTheme}) => {
  
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <FontAwesomeIcon icon={title === "dark" ? faMoon: faSun} />
      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={30}
        offColor={colors.cor1}
        onColor={colors.cor3}>
        
        </Switch>
    </Container>
  );
};
