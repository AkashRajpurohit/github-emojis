import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  Flex,
} from '@chakra-ui/react';
import React from 'react';
import { IEmoji } from '../interfaces/IEmoji';
import { Card } from './Card';

interface CommonEmojisProps {
  emojis: IEmoji[];
}

const CommonEmojis = ({ emojis }: CommonEmojisProps) => {
  return (
    <Box my={4} w={['90%', '70%']}>
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Commonly used emojis in commit messages{' '}
              <span aria-label="rocket">🚀</span>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Flex
              flexWrap="wrap"
              w="100%"
              justifyContent="center"
              alignItems="center"
            >
              {(emojis ?? []).map((emoji) => (
                <Card
                  key={emoji.code}
                  code={emoji.code}
                  img={emoji.img}
                  description={emoji.description}
                />
              ))}
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default CommonEmojis;
