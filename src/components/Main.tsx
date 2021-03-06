import React, { useReducer, useCallback } from 'react';
import { IEmoji } from '../interfaces/IEmoji';
import { Card } from './Card';
import { Intersection } from './Intersection';
import {
  Box,
  Input,
  Stack,
  Flex,
  Text,
  FormLabel,
  FormControl,
} from '@chakra-ui/react';
import { debounce } from '../lib/debounce';

interface IEmojiCardProps {
  emojis: IEmoji[];
}

type State = {
  totalEmojis: IEmoji[];
  emojis: IEmoji[];
  filteredEmojis: IEmoji[];
  emojisLength: number;
};

type Action = { type: 'SEARCH' | 'LOAD_MORE'; payload?: string };

const emojiReducer = (state: State, action: Action): State => {
  const { type, payload } = action;
  const { emojisLength, totalEmojis, filteredEmojis } = state;

  switch (type) {
    case 'LOAD_MORE': {
      const newLength = Math.max(
        40,
        Math.min(emojisLength + 40, filteredEmojis.length)
      );

      return {
        ...state,
        emojis: filteredEmojis.slice(0, newLength),
        emojisLength: newLength,
      };
    }

    case 'SEARCH': {
      let searchTerm = payload!.toLowerCase();

      if (searchTerm.trim() === '') {
        return {
          ...state,
          emojis: totalEmojis.slice(0, emojisLength),
          filteredEmojis: totalEmojis,
        };
      }

      const searchResults = totalEmojis.filter(({ code }) =>
        code.toLowerCase().includes(searchTerm)
      );

      return {
        ...state,
        emojis: searchResults,
        filteredEmojis: searchResults,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export const Main = ({ emojis }: IEmojiCardProps) => {
  const initialState = {
    totalEmojis: emojis,
    filteredEmojis: emojis,
    emojis: emojis.slice(0, 40),
    emojisLength: 40,
  };

  const [state, dispatch] = useReducer(emojiReducer, initialState);

  const loadMore = useCallback(() => {
    dispatch({ type: 'LOAD_MORE' });
  }, []);

  const filterOnSearch = debounce((value: string) => {
    dispatch({ type: 'SEARCH', payload: value });
  }, 400);

  return (
    <Stack pt="8" w={['90%', '70%']}>
      <Box mb="4">
        <FormControl>
          <FormLabel>Search Shortcodes</FormLabel>
          <Input
            placeholder="eg: atom"
            onChange={(e) => {
              filterOnSearch(e.target.value);
            }}
          />
        </FormControl>
      </Box>
      <Flex
        flexWrap="wrap"
        w="100%"
        justifyContent="center"
        alignItems="center"
      >
        {state.emojis.map((e) => (
          <Card code={e.code} img={e.img} key={e.code} />
        ))}
        {state.emojis.length === 0 && (
          <Text my="8">No Emoji Found for this search</Text>
        )}
        <Intersection onVisible={() => loadMore()} />
      </Flex>
    </Stack>
  );
};
