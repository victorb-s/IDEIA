import { LinkContainer } from './styles'

// eslint-disable-next-line react/prop-types
const LinkContext = ({ text, topic }) => {
  console.log(topic);
  return (
    <LinkContainer
      to="/informacoes"
      state={{ topicPassed: topic }}
    >
      {text}
    </LinkContainer>
  )
}

export default LinkContext