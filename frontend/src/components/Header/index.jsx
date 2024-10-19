import { HeaderContainer, NavContainer } from "./styles"
import styles from './header.module.css'

import HeaderLogo from '../../assets/logoHeaderSjcc.svg'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <HeaderContainer>
        <img src={HeaderLogo} alt="Logo Header SJCC" />
        <NavContainer>
            <li><Link to="/" className={styles.navLink}>Home</Link></li>
            <li><Link to="/" className={styles.navLink}>Em Alta</Link></li>
            <li><Link to="/" className={styles.navLink}>Meus Projetos</Link></li>
        </NavContainer>
    </HeaderContainer>
  )
}

export default Header