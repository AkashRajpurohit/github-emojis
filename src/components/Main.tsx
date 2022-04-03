import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useCallback, useReducer, useTransition } from 'react';
import { IEmoji } from '../interfaces/IEmoji';
import { debounce } from '../lib/debounce';
import { Card } from './Card';
import { Intersection } from './Intersection';

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
  const [isPending, startTransition] = useTransition();
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
    startTransition(() => dispatch({ type: 'SEARCH', payload: value }));
  }, 400);

  return (
    <Stack pt="8" w={['90%', '70%']}>
      <Flex w="100%" justifyContent="center" h="4">
        {isPending && <Spinner />}
      </Flex>
      <Box my="4">
        <FormControl mb="4">
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
          <Card code={e.code} img={e.img} key={e.code} disabled={isPending} />
        ))}
        {state.emojis.length === 0 && (
          <Text my="8">No Emoji Found for this search</Text>
        )}
        <Intersection onVisible={() => loadMore()} />
      </Flex>
    </Stack>
  );
};
