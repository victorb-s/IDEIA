import { Container, Column, TextContainer, ButtonContainer, ArrowCircle, IconArrow } from './styles';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

// import RainbowSide from '../../../assets/JCRainbow.svg';

const SectionInicio = () => {
  const handleScroll = (e) => {
    e.preventDefault(); // Evita o comportamento padrão do link
    const section = document.getElementById("sugesTitulos");
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
};

  return (
    <Container>
      <Column>
        <TextContainer>
          <h1>Tem algo em mente? Deixe a nossa <i>IA</i> te ajudar!</h1>
          <p>Digite apenas algumas palavras-chaves e aproveite dezenas de sugestões de títulos e conteúdos!</p>
        </TextContainer>

        <ButtonContainer to='#sugesTitulos' onClick={handleScroll}>
          <p>Experimente agora</p>
          <ArrowCircle>
            <IconArrow icon={faArrowRight}/>
          </ArrowCircle>
        </ButtonContainer>
      </Column>

      {/* <ImageSide/> */}
    </Container>
  )
}

export default SectionInicio