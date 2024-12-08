import { useState } from "react";
import { useForm, Controller } from 'react-hook-form'
import { useNavigate } from "react-router-dom";

import {
  ArrowCircle,
  Button,
  Card,
  Container,
  IconArrow,
  Input,
  InputWrapper,
  TextArea,
} from "./styles";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
const ContentEditor = ({ topicPassed }) => {
  const navigate = useNavigate()
  // eslint-disable-next-line no-unused-vars
  const [contentTheme, setContentTheme] = useState(topicPassed);
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem('topic', topicPassed);
    navigate("/sugestoes", { state: { formData: data }})
  }

  return (
    <Container>
      <Card onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="topic"
          control={control}
          defaultValue={contentTheme || "Exemplo de Tópico"}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Tema do conteúdo"
            />
          )}
        />

        <InputWrapper>
          <Controller
            name="category"
            control={control}
            defaultValue={""}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Categoria"
              />
            )}
          />

          <Controller
            name="audience"
            control={control}
            defaultValue={""}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Audiência"
              />
            )}
          />
        </InputWrapper>

        <Controller
          name="tone"
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Tom"
            />
          )}
        />

        <Controller
          name="additionalInfo"
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <TextArea
              {...field}
              placeholder="Descrição sobre o contexto do tema e palavras chave."
            />
          )}
        />

        <Button>
          Sugerir títulos
          <ArrowCircle>
            <IconArrow icon={faArrowRight} />
          </ArrowCircle>
        </Button>
      </Card>
    </Container>
  );
}

export default ContentEditor;