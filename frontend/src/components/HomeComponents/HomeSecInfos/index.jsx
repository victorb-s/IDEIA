import { useNavigate } from "react-router-dom";
import {
  GeneralContainer,
  CategoryForms,
} from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";

import { useForm, Controller } from "react-hook-form";

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
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate("/informacoes", { state: { topicPassed: data.topic } });
  };

  return (
    <GeneralContainer
      id={id}
      variants={ContainerVariants}
      initial="initial"
      animate="animate"
    >
      <CategoryForms
        onSubmit={handleSubmit(onSubmit)}
        variants={RightContVariants}
        initial="initial"
        animate="animate"
      >
        <h1>Deseja buscar sobre algo específico? Com nossa IA, você pode!</h1>
        <label htmlFor="topic">
          Digite apenas algumas palavras-chave e aproveite dezenas de sugestões de títulos e conteúdos!
        </label>

        <div className="divInput">
          <Controller
            name="topic"
            control={control}
            defaultValue=""
            render={({ field }) => (   
                <input
                  {...field}
                  className="textInput"
                  required
                  type="text"
                  placeholder="Insira o nome do tópico..."
                />
            )}
          />

          <button className="submitInput" type="submit" value="">{<FontAwesomeIcon icon={faArrowAltCircleUp} />}</button>
        </div>
      </CategoryForms>
    </GeneralContainer>
  );
};
