import { LinkContainer } from './styles'

// eslint-disable-next-line react/prop-types
const LinkContext = ({ text }) => {
  return (
    <LinkContainer to="/informacoes">{text}</LinkContainer>
  )
}

export default LinkContext