import { useColorMode, Box } from '@chakra-ui/core';

export const DarkModeSwitch = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === 'dark';
	return (
		<Box
			pos='fixed'
			top='1rem'
			right='1rem'
			onClick={toggleColorMode}
			cursor='pointer'
		>
			{isDark ? 'dark' : 'light'}
		</Box>
	);
};
