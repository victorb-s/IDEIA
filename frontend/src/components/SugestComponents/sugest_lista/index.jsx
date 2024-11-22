import { useEffect, useState } from "react";
import Sugestaoitem from "../sugest_itens/index";
import NavBotao from "../sugest_navbutton/index";
import GerarBotao from "../sugest_gerarbutton";
import LinkContext from "../sugest_contexto/";
import { ListaContainer, LoadingContainer, TituloLista } from "./styles";

import { api } from '../../../services/app';

import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// eslint-disable-next-line react/prop-types
function SugestaoLista({ topic, handleSelectTitle }) {
  const [sugestoes, setSugestoes] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const handleGenerateClick = () => {
    console.log('Botão clicado');
    setSugestoes([]);
    setLoading(true);
    fetchData();
  } 


  return (
    <ListaContainer>
      <NavBotao />
      <TituloLista>{topic}</TituloLista>
      {loading ? (
        <LoadingContainer>
          {Array.from({ length: 5 }).map((_, index) => (
            
            <div key={index} style={{ margin: "10px 0" }}>
              <SkeletonTheme baseColor="rgba(0, 0, 0, 0.1)" highlightColor="rgba(0, 0, 0, 0.3)">
              <Skeleton height={30} width="60%" />
            </SkeletonTheme>
            </div>
          ))}
        </LoadingContainer>
      ) : (
        sugestoes.map((title, index) => (
          <Sugestaoitem key={index} text={title.title} handleSelectTitle={handleSelectTitle}/>
        ))
      )}
      <GerarBotao func={handleGenerateClick}/>

      <LinkContext
        text="Não encontrou o que procura?"
      />
    </ListaContainer>
  );
}


export default SugestaoLista;