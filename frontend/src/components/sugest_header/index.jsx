import React from "react";
import { ContainerHeader, Logo, InputPesquisa, FotoPerfil} from "./styles";
import logoSolSjcc from '../../assets/logoSolSjcc.svg';
import perfil from '../../assets/perfil.svg';

function Header() {
  return (
    <ContainerHeader>
      <Logo src={logoSolSjcc} alt="Logo" />
      <InputPesquisa type="text" placeholder="Título de sua notícia" />
      <FotoPerfil src={perfil} alt="foto de Perfil"/>
    </ContainerHeader>
  );
}

export default Header;