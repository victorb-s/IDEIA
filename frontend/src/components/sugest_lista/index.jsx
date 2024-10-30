import React, { useState } from "react";
import Sugestaoitem from "../sugest_itens/index";
import NavBotao from "../sugest_navbutton/index";
import GerarBotao from "../sugest_gerarbutton";
import { ListaContainer, TituloLista } from "./styles";

function SugestaoLista() {
  const [sugestoes] = useState([
    "Gustavo Lima é indiciado pela Polícia Civil por lavagem de dinheiro",
    "Gustavo é indiciado por lavagem de dinheiro e organização criminosa",
    "Gustavo Lima cancela show e volta para os EUA após ser indiciado por lavagem de dinheiro"
  ]);

  return (
    <ListaContainer>
      <NavBotao></NavBotao>
      <TituloLista>Gustavo lima está envolvido com o crime organizado</TituloLista>
      {sugestoes.map((texto, index) => (
        < Sugestaoitem key={index} text={texto} />
      ))}
      <GerarBotao></GerarBotao>
    </ListaContainer>
  );
}

export default SugestaoLista;