import React from 'react';
import Github from 'react-github-corner';
import { useColorMode } from '@chakra-ui/react';

export const GithubCorner = () => {
  const { colorMode } = useColorMode();

  const colors = {
    dark: {
      bannerColor: '#fff',
      octoColor: '#151513',
    },
    light: {
      bannerColor: '#151513',
      octoColor: '#fff',
    },
  };

  return (
    <Github
      href="https://github.com/AkashRajpurohit/github-emojis"
      direction="left"
      bannerColor={colors[colorMode].bannerColor}
      octoColor={colors[colorMode].octoColor}
    />
  );
};
