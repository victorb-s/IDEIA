
import { useState } from "react";
import {
  ArrowCircle,
  Button,
  Card,
  Container,
  IconArrow,
  Input,
  InputWrapper,
  NavButton,
  NavContainer,
  TextArea,
} from "./styles";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function ContentEditor() {
  const [contentTheme, setContentTheme] = useState(
    /* vai receber o título como prop?? */ "Titulo Exemplo"
  );
  const [category, setCategory] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [tone, setTone] = useState("");

  const [textAreaValue, setTextAreaValue] = useState("");

  return (
    <Container>
      <NavContainer>
        <NavButton icon={faChevronLeft} />
        <NavButton icon={faChevronRight} />
      </NavContainer>
      <Card>
        <Input
          id="title"
          value={contentTheme}
          onChange={(e) => setContentTheme(e.target.value)}
          placeholder="Tema do conteúdo"
        />

        <InputWrapper>
          <Input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Categoria"
          />
          <Input
            value={targetAudience}
            onChange={(e) => setTargetAudience(e.target.value)}
            placeholder="Audiência"
          />
        </InputWrapper>

        <Input
          value={tone}
          onChange={(e) => setTone(e.target.value)}
          placeholder="Tom desejado (coloquial, formal, etc...)"
        />

        <TextArea
          value={textAreaValue}
          onChange={(e) => setTextAreaValue(e.target.value)}
          placeholder="Descrição sobre o contexto do tema e palavras chave."
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
