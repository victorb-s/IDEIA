import { FooterContainer, TextContainer, IconsContainer, Icons } from './styles';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <FooterContainer>
      <IconsContainer>
        <a href="https://www.instagram.com/jc_pe/" target='_blank'><Icons icon={faInstagram}/></a>
        <a href="https://www.linkedin.com/company/sistema-jornal-do-commercio/posts/?feedView=all" target='_blank'><Icons icon={faLinkedin}/></a>
        <a href="https://github.com/victorb-s/SJCC-Desenvolvimento" target='_blank'><Icons icon={faGithub}/></a>
      </IconsContainer>

      <TextContainer>
        <p><span>Sistema Jornal do Commercio de Comunicação</span> © 2024.</p>
        <p>Desenvolvido por equipe de estudantes da CESAR Shool.</p>
      </TextContainer>
    </FooterContainer>
  )
}

export default Footer