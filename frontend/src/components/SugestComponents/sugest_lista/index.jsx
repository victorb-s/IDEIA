import { useEffect, useState } from "react";
import Sugestaoitem from "../sugest_itens/index";
import NavBotao from "../sugest_navbutton/index";
import GerarBotao from "../sugest_gerarbutton";
import { ListaContainer, TituloLista } from "./styles";

import { api } from '../../../services/app';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// eslint-disable-next-line react/prop-types
function SugestaoLista({ topic, handleSelectTitle }) {
  const [sugestoes, setSugestoes] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await api.get(`/v1/title/generate?topics=${topic}`);
  //       setSugestoes(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //     console.log(sugestoes);
  //   }
  //   fetchData();
  // }, [topic]);

  const fetchData = async () => {
    try {
      const response = await api.get(`/v1/title/generate?topics=${topic}`);
      setSugestoes(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
      fetchData();
  }, []);

  return (
    <ListaContainer>
      <NavBotao/>
      <TituloLista>{topic}</TituloLista>
      {loading ? (
        Array.from({ length: 5 }).map((_, index) => (
          <div key={index} style={{ margin: "10px 0" }}>
            <Skeleton height={30} width="100%" />
          </div>
        ))
      ) : (
        sugestoes.map((title, index) => (
          <Sugestaoitem key={index} text={title.title} handleSelectTitle={handleSelectTitle}/>
        ))
      )}
      <GerarBotao/>
    </ListaContainer>
  );
}

export default SugestaoLista;