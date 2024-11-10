import { Container, Column, TextContainer, ButtonContainer, ArrowCircle, IconArrow } from './styles';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

// import RainbowSide from '../../../assets/JCRainbow.svg';

const SectionInicio = ({ id }) => {
  const handleScroll = (e) => {
        e.preventDefault(); // Evita o comportamento padrão do link
        const section = document.getElementById("trending");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

  return (
    <Container id={id}>
      <Column>
        <TextContainer>
          <h1>Tem algo em mente? Deixe a nossa <i>IA</i> te ajudar!</h1>
          <p>Digite apenas algumas palavras-chaves e aproveite dezenas de sugestões de títulos e conteúdos!</p>
        </TextContainer>

        <ButtonContainer to='#trending' onClick={handleScroll}>
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