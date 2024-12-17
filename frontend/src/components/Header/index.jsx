import {
  HeaderContainerB,
  HeaderContainer,
  ContainerLeft,
  TituloContainer,
  IconContainer,
  NavContainer,
  NavLink,
} from "./styles";
import HeaderLogo from "../../assets/logoHeaderSjcc.svg";
import HeaderBLogo from "../../assets/logoSolSjcc.svg";
import DarkHeaderBLogo from "../../assets/DarkHeaderBLogo.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

import { motion } from "motion/react";
import { ThemeToggler } from "../HeaderComponents/ThemeToggler";

const HeaderVariants = {
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const ImgVariants = {
  initial: {
    x: "-100vw",
  },

  animate: {
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.1,
      ease: "easeInOut",

      type: "spring",
      stiffness: 150,
      damping: 20,
    },
  },
};

// eslint-disable-next-line react/prop-types
export const HeaderRed = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);

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
    <HeaderContainer
      variants={HeaderVariants}
      initial="initial"
      animate="animate"
    >
      <Link to="/">
        <motion.img
          src={title === "dark" ? DarkHeaderBLogo : HeaderLogo}
          alt="Logo Header SJCC"
          variants={ImgVariants}
        />
      </Link>

        <>
          {showMenu ? (
            <FontAwesomeIcon
              icon={faXmark}
              className="hambNav"
              onClick={toggleMenu}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              className="hambNav"
              onClick={toggleMenu}
            />
          )}
          <NavContainer className={showMenu ? "open" : ""}>
      {location.pathname === "/" && (<>
            <li>
              <NavLink
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("inicio");
                  closeMenuOnMobile();
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("trending");
                  closeMenuOnMobile();
                }}
              >
                Em Alta
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projetos");
                  closeMenuOnMobile();
                }}
              >
                Meus Projetos
              </NavLink>
            </li>
            </>
          )}
          <ThemeToggler toggleTheme={toggleTheme} />
          </NavContainer>
          </>
    </HeaderContainer>
  );
};

// eslint-disable-next-line react/prop-types
export const HeaderBlue = ({ titleHeader, toggleTheme }) => {
  const { title } = useContext(ThemeContext);

  return (
    <HeaderContainerB
      variants={HeaderVariants}
      initial="initial"
      animate="animate"
    >
      <ContainerLeft>
        <Link to="/">
          <motion.img
            src={title === "dark" ? DarkHeaderBLogo : HeaderBLogo}
            alt="Logo Header SJCC"
            className="headerLogo"
            variants={ImgVariants}
          />
        </Link>
        <TituloContainer>
          {titleHeader ? <p>{titleHeader}</p> : "Título da sua notícia"}
        </TituloContainer>
      </ContainerLeft>

      <IconContainer>
        <FontAwesomeIcon icon={faUser} />
        <ThemeToggler toggleTheme={toggleTheme} />
      </IconContainer>
    </HeaderContainerB>
  );
};
