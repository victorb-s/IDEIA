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
import { faBars, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";

import { Link, useLocation } from 'react-router-dom'
import { useState } from "react";

export const HeaderRed = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 768) {
      setShowMenu(false);
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeaderContainer>
        <img src={HeaderLogo} alt="Logo Header SJCC" />
        {location.pathname === '/' && (<>
          {showMenu ? (
            <FontAwesomeIcon icon={faXmark} className="hambNav" onClick={toggleMenu}/>
          ) : (
            <FontAwesomeIcon icon={faBars} className="hambNav" onClick={toggleMenu}/>
          )}    
          <NavContainer className={showMenu ? "open" : ""}>
            <li><NavLink to="/" onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); closeMenuOnMobile(); }}>Home</NavLink></li>
            <li><NavLink to="/" onClick={(e) => { e.preventDefault(); scrollToSection('trending'); closeMenuOnMobile(); }}>Em Alta</NavLink></li>
            <li><NavLink to="/" onClick={(e) => { e.preventDefault(); scrollToSection('projetos'); closeMenuOnMobile(); }}>Meus Projetos</NavLink></li>
          </NavContainer>
        </>)}
    </HeaderContainer>
  )
}

// eslint-disable-next-line react/prop-types
export const HeaderBlue = ({ titleHeader }) => {
  return (
    <HeaderContainerB>
      <ContainerLeft>
        <Link to="/">
          <img src={HeaderBLogo} alt="Logo Header SJCC" className="headerLogo"/>
        </Link>
        <TituloContainer>
          {titleHeader ? (
            <p>{titleHeader}</p>
          ) : "Título da sua notícia"}
        </TituloContainer>
      </ContainerLeft>

      <IconContainer>
        <FontAwesomeIcon icon={faUser} />
      </IconContainer>
    </HeaderContainerB>
  )
}