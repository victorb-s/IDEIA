import React from "react";
import { Card, CardImg, CardInfos, Container } from "./styles";

const SectionProjetos = () => {
  const projetos = [
    {
      titulo:
        "Debate de candidatos à prefeitura de São Paulo acaba em confusão!",
      categoria: "ELEIÇÕES 2024",
      imagem: "https://via.placeholder.com/250",
    },
    {
      titulo: "8 das 15 capitais já têm resultados; veja os dados completos",
      categoria: "ELEIÇÕES 2024",
      imagem: "https://via.placeholder.com/250",
    },
    {
      titulo: "Jogo na França pode ser anulado após atitude de ex-Santos",
      categoria: "ESPORTES",
      imagem: "https://via.placeholder.com/250",
    },
    {
      titulo: "53 são detidos por fazer boca de urna em Niterói, no RJ",
      categoria: "ELEIÇÕES 2024",
      imagem: "https://via.placeholder.com/250",
    },
    {
      titulo:
        "Debate de candidatos à prefeitura de São Paulo acaba em confusão!",
      categoria: "ELEIÇÕES 2024",
      imagem: "https://via.placeholder.com/250",
    },
    {
      titulo:
        "Debate de candidatos à prefeitura de São Paulo acaba em confusão!",
      categoria: "ELEIÇÕES 2024",
      imagem: "https://via.placeholder.com/250",
    },
    {
      titulo:
        "Debate de candidatos à prefeitura de São Paulo acaba em confusão!",
      categoria: "ELEIÇÕES 2024",
      imagem: "https://via.placeholder.com/250",
    },
    {
      titulo:
        "Debate de candidatos à prefeitura de São Paulo acaba em confusão!",
      categoria: "ELEIÇÕES 2024",
      imagem: "https://via.placeholder.com/250",
    },
  ];

  return (
    <Container>
      {projetos.length > 0 ? (
        projetos.map((projeto, index) => (
          <Card key={index}>
            <CardImg>
              <div>{projeto.titulo}</div>
            </CardImg>
            <CardInfos>
              <h2>{projeto.categoria}</h2>
              <h1>{projeto.titulo}</h1>
            </CardInfos>
          </Card>
        ))
      ) : (
        <div className="sem-projeto">Não há projetos recentes</div>
      )}
    </Container>
  );
};

export default SectionProjetos;
