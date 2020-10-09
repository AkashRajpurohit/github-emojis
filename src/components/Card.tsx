import React from 'react';
import { Text, Button, Flex } from '@chakra-ui/core';

export const Card = ({ code, img }: { code: string; img: string }) => {
	return (
		<Flex
			pt='8'
			justifyContent='center'
			alignItems='center'
			flexDirection='column'
			mx='12px'
		>
			<img src={img}></img>
			<Text>:{code}:</Text>
			<Button mt='2' p='5px' variant='primary'>
				Copy
			</Button>
		</Flex>
	);
};
