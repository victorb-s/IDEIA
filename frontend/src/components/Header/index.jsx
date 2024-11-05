import { HeaderContainer, NavContainer, NavLink } from "./styles"
import HeaderLogo from '../../assets/logoHeaderSjcc.svg'

const Header = () => {
  return (
    <HeaderContainer>
        <img src={HeaderLogo} alt="Logo Header SJCC" />
        <NavContainer>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/">Em Alta</NavLink></li>
            <li><NavLink to="/">Meus Projetos</NavLink></li>
        </NavContainer>
    </HeaderContainer>
  )
}

export default Header