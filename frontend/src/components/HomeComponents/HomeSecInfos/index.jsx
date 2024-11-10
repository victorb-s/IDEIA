import { useState } from "react";
import * as Styled from "./styles";

export const HomeInfos = ({ id }) => {
  const [categoria, setCategoria] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulário submetido com:", categoria);
  };

  return (
    <Styled.GeneralContainer id={id}>
      <Styled.CategoryForms onSubmit={handleSubmit}>
        <h1>Deseja buscar sobre algo específico? Com nossa IA, você pode!</h1>
        <label htmlFor="categoria">
          Digite apenas algumas palavras-chave e aproveite dezenas de sugestões de títulos e conteúdos!
        </label>
        <div className="divInput">
          <input
            className="textInput"
            type="text"
            value={categoria}
            placeholder="Insira o nome do tópico..."
            onChange={(e) => setCategoria(e.target.value)}
          />
          <input className="submitInput" type="submit" value="" />
        </div>
      </Styled.CategoryForms>
    </Styled.GeneralContainer>
  );
};
