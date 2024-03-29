import { Box, Flex, Text, useColorMode, useToast } from '@chakra-ui/react';
import React from 'react';
import { IEmoji } from '../interfaces/IEmoji';

interface ICardProps extends IEmoji {
  disabled?: boolean;
}

export const Card = ({ code, img, description, disabled }: ICardProps) => {
  const toast = useToast();

  const copyCode = async (code: string) => {
    if (navigator && navigator.clipboard) {
      await navigator.clipboard.writeText(code);
      toast.closeAll();

      toast({
        title: 'Hurray! 🙋‍♂️',
        description: `We've copied the code ( ${code} ) for you.`,
        status: 'success',
        duration: 4000,
        position: 'top-right',
        isClosable: true,
      });
    }
  };

  const { colorMode } = useColorMode();

  const cardColor = { light: 'blue.50', dark: '#2b2b2b' };
  const hoverCardColor = { light: 'blue.100', dark: '#202020' };
  const cardColorDisabled = { light: 'blue.100', dark: '#212121' };

  return (
    <Flex
      minW={['8rem', '10rem']}
      minH={['8rem', '10rem']}
      maxW="12rem"
      borderWidth="2px"
      borderRadius="lg"
      flexDirection="column"
      m="0 20px 20px 0"
      boxShadow="0 1px 2px 0 rgba(0, 0, 0, .4)"
      bg={cardColor[colorMode]}
      textAlign="center"
      onClick={() => copyCode(code)}
      cursor="pointer"
      _hover={{ backgroundColor: `${hoverCardColor[colorMode]}` }}
      transition="all 200ms ease-in"
      aria-disabled={disabled}
      _disabled={{
        backgroundColor: `${cardColorDisabled[colorMode]}`,
        pointerEvents: 'none',
        cursor: 'not-allowed',
      }}
    >
      <Flex
        px="10px"
        py="25px"
        justifyContent="center"
        w="100%"
        wordBreak="break-all"
      >
        <img
          src={img}
          width="60px"
          height="60px"
          alt={`${code} github emoji`}
        />
      </Flex>
      <Box px="10px" py="15px" wordBreak="break-word">
        <Text>{code}</Text>
        {description && (
          <Box mt={4}>
            <Text fontWeight="bold">{description}</Text>
          </Box>
        )}
      </Box>
    </Flex>
  );
};
