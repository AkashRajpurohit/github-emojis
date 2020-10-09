import { Flex, Heading, Text } from '@chakra-ui/core'

export const Hero = ({ title }: { title: string }) => (
  <Flex pt="8" justifyContent="center" alignItems="center" flexDirection="column">
    <Heading fontSize="6vw">{title}</Heading>
    <Text>Search shortcodes of emojis supported by Github</Text>
  </Flex>
)

Hero.defaultProps = {
  title: 'Github Emojis',
}
