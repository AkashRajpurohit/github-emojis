import { Box, Stack, Input, Flex, Spinner } from '@chakra-ui/core';
import { EmojiCards } from './EmojiCards';

import fetcher from '../lib/fetcher';
import useSwr from 'swr';

export const Main = () => {
	const { data } = useSwr('/api/get-emojis', fetcher);

	if (!data) {
		return (
			<Stack pt='8'>
				<Spinner />
			</Stack>
		);
  }

	const emojiObjToArray = Object.keys(data).map((code: string) => {
		return {
			code: `:${code}:`,
			img: data[code] as string,
		};
  });

	return (
		<Stack pt='8' w='70%'>
			<Box mb='4'>
				<Input placeholder='Search Shortcodes' />
			</Box>
			<Flex
				flexWrap='wrap'
				w='100%'
				justifyContent='center'
				alignItems='center'
			>
				<EmojiCards emojis={emojiObjToArray} />
			</Flex>
		</Stack>
	);
};
