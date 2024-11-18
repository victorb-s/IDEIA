import { Container, Column, TextContainer, ButtonContainer, ArrowCircle, IconArrow } from './styles';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'motion/react';

// import RainbowSide from '../../../assets/JCRainbow.svg';

const ContainerVariants = {
  initial: {
    opacity: 0,
    x: '100vw'
  },

  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 0.2,

      type: 'spring',
      stiffness: 120,
      damping: 20
    }
  }
}

const TitleVariants = {
  initial: {
    x: '-100vw'
  },

  animate: {
    x: 0,
    transition: {
      duration: 1,
      delay: 0.5,
      type: 'spring',
      stiffness: 120,
      damping: 20
    }
  }
}

const SubTitleVariants = {
  initial: {
    x: '-100vw'
  },

  animate: {
    x: 0,
    transition: {
      duration: 1,
      delay: 0.8,
      type: 'spring',
      stiffness: 120,
      damping: 20
    }
  }
}

// eslint-disable-next-line react/prop-types
const SectionInicio = ({ id }) => {
  const handleScroll = (e) => {
        e.preventDefault(); // Evita o comportamento padrão do link
        const section = document.getElementById("trending");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

  return (
    <Container
      id={id}
      variants={ContainerVariants}
      initial='initial'
      animate='animate'
    >
      <Column>
        <TextContainer>
          <motion.h1
            variants={TitleVariants}
          >
            Tem algo em mente? Deixe a nossa <i>IA</i> te ajudar!
          </motion.h1>
          <motion.p
            variants={SubTitleVariants}
          >
            Digite apenas algumas palavras-chaves e aproveite dezenas de sugestões de títulos e conteúdos!
          </motion.p>
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