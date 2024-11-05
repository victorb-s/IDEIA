import { Heading, Line, HeadingContainer } from './styles'
const SectionHeading = ({ text }) => {
    return (
    <HeadingContainer>
        <Heading>{text}</Heading>
        <Line />
    </HeadingContainer>
    )
}

export default SectionHeading