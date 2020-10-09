import { Box, Stack, Input, Flex, Spinner } from '@chakra-ui/core';
import { Card } from './Card';

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
				{Object.keys(data).length > 0 &&
					Object.keys(data).map((code) => (
						<Card code={code} img={data[code]} key={code} />
					))}
			</Flex>
		</Stack>
	);
};
