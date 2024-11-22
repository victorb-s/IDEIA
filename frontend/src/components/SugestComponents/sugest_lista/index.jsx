import { useEffect, useState } from "react";
import Sugestaoitem from "../sugest_itens/index";
import NavBotao from "../sugest_navbutton/index";
import GerarBotao from "../sugest_gerarbutton";
import LinkContext from "../sugest_contexto/";
import { ListaContainer, LoadingContainer, TituloLista } from "./styles";

import { api } from '../../../services/app';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// eslint-disable-next-line react/prop-types
function SugestaoLista({ topic, handleSelectTitle, formData }) {

  const [sugestoes, setSugestoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [detailedTopic, setDetailedTopic] = useState();

  const fetchData = async () => {
    try{
      let detailedTopic = null;

      if(formData){
        // eslint-disable-next-line react/prop-types
        const response = await api.get(`/v1/title/add-context?topic=${formData.topic}&category=${formData.category}&audience=${formData.audience}&tone=${formData.tone}&additionalInfo=${formData.additionalInfo}`);

        detailedTopic = response.data.detailedTopic;
        setDetailedTopic(detailedTopic);
      }
      
      const result = await api.get(`/v1/title/generate?topics=${detailedTopic || topic}`);

      setSugestoes(result.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchTitles = async () => {
    try {
      const activeTopic = detailedTopic || topic;
      const response = await api.get(`/v1/title/generate?topics=${activeTopic}`);
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
    fetchTitles();
  } 

  console.log(detailedTopic || topic);

  return (
    <ListaContainer>
      <NavBotao />
      <TituloLista>{detailedTopic || topic}</TituloLista>
      {loading ? (
        <LoadingContainer>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} style={{ margin: "10px 0" }}>
              <Skeleton height={30} width="60%" />
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
        topic={detailedTopic || topic}
      />
    </ListaContainer>
  );
}


export default SugestaoLista;