import { useColorMode, Box } from '@chakra-ui/core';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export const DarkModeSwitch = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === 'dark';
	return (
		<Box
			pos='fixed'
			top='2rem'
			right='2rem'
			onClick={toggleColorMode}
			cursor='pointer'
		>
			{isDark ? <MoonIcon boxSize='26px' /> : <SunIcon boxSize='26px' />}
		</Box>
	);
};
