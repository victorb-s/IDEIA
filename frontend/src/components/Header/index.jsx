import {
  HeaderContainerB, 
  HeaderContainer, 
  ContainerLeft,
  TituloContainer,
  IconContainer,
  NavContainer, 
  NavLink
} from "./styles"
import HeaderLogo from '../../assets/logoHeaderSjcc.svg'
import HeaderBLogo from '../../assets/logoSolSjcc.svg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { Link, useLocation } from 'react-router-dom'

export const HeaderRed = () => {
  const location = useLocation();

  return (
    <HeaderContainer>
        <img src={HeaderLogo} alt="Logo Header SJCC" />
        {location.pathname === '/' && (
          <NavContainer>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/">Em Alta</NavLink></li>
            <li><NavLink to="/">Meus Projetos</NavLink></li>
          </NavContainer>
        )}
    </HeaderContainer>
  )
}

export const HeaderBlue = ({titulo}) => {
  return (
    <HeaderContainerB>
      <ContainerLeft>
        <Link to="/">
          <img src={HeaderBLogo} alt="Logo Header SJCC" />
        </Link>
        <TituloContainer>
          {titulo ? (
            <p>{titulo}</p>
          ) : "Título da sua notícia"}
        </TituloContainer>
      </ContainerLeft>

      <IconContainer>
        <FontAwesomeIcon icon={faUser} />
      </IconContainer>
    </HeaderContainerB>
  )
}