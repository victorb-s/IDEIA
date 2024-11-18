import { useState } from "react";
import {
  GeneralContainer,
  CategoryForms,
} from "./styles";

const ContainerVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },

  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  }
}

const RightContVariants = {
  initial: {
    opacity: 0,
    x: "100vw",
  },

  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.3,
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  }
}

// eslint-disable-next-line react/prop-types
export const HomeInfos = ({ id }) => {
  const [categoria, setCategoria] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulário submetido com:", categoria);
  };

  return (
    <GeneralContainer
      id={id}
      variants={ContainerVariants}
      initial="initial"
      animate="animate"
    >
      <CategoryForms
        onSubmit={handleSubmit}
        variants={RightContVariants}
        initial="initial"
        animate="animate"
      >
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
      </CategoryForms>
    </GeneralContainer>
  );
};
