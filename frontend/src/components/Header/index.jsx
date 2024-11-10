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

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeaderContainer>
        <img src={HeaderLogo} alt="Logo Header SJCC" />
        {location.pathname === '/' && (
          <NavContainer>
            <li><NavLink to="/" onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }}>Home</NavLink></li>
            <li><NavLink to="/" onClick={(e) => { e.preventDefault(); scrollToSection('trending'); }}>Em Alta</NavLink></li>
            <li><NavLink to="/" onClick={(e) => { e.preventDefault(); scrollToSection('projetos'); }}>Meus Projetos</NavLink></li>
          </NavContainer>
        )}
    </HeaderContainer>
  )
}

// eslint-disable-next-line react/prop-types
export const HeaderBlue = ({ title }) => {
  return (
    <HeaderContainerB>
      <ContainerLeft>
        <Link to="/">
          <img src={HeaderBLogo} alt="Logo Header SJCC" className="headerLogo"/>
        </Link>
        <TituloContainer>
          {title ? (
            <p>{title}</p>
          ) : "Título da sua notícia"}
        </TituloContainer>
      </ContainerLeft>

      <IconContainer>
        <FontAwesomeIcon icon={faUser} />
      </IconContainer>
    </HeaderContainerB>
  )
}