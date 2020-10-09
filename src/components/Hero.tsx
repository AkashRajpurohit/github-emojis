import { Flex, Heading } from '@chakra-ui/core'

export const Hero = ({ title }: { title: string }) => (
  <Flex pt="8" justifyContent="center" alignItems="center">
    <Heading fontSize="6vw">{title}</Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'Github Emojis',
}
