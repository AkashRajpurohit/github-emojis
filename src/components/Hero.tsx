import { Flex, Heading, Text } from '@chakra-ui/react';

export const Hero = ({ title }: { title: string }) => (
  <Flex
    pt="8"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
  >
    <Heading fontSize="6vw">{title}</Heading>
    <Text fontSize={['0.9em', '1.3em']}>
      Search shortcodes of emojis supported by Github
    </Text>
  </Flex>
);

Hero.defaultProps = {
  title: 'Github Emojis',
};
