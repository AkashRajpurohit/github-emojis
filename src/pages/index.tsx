import { Text, Link } from '@chakra-ui/core';
import Head from 'next/head';

import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { Footer } from '../components/Footer';

const Index = () => (
  <>
    <Head>
      <link rel="shortcut icon" href="/favicon.png" />
      <link rel="canonical" href="https://github-emojis.vercel.app" />
      <title>Github Emojis | Akash Rajpurohit</title>
      <meta
        name="description"
        content="Search shortcodes of emojis supported by Github"
      />
      <meta name="og:title" content="Github Emojis | Akash Rajpurohit" />
      <meta name="og:type" content="website" />
      <meta name="og:url" content="https://github-emojis.vercel.app" />
      <meta
        name="og:image"
        content="https://github-emojis.vercel.app/banner.png"
      />
      <meta name="og:image:alt" content="Github Emojis | Akash Rajpurohit" />
      <meta name="og:site_name" content="Github Emojis | Akash Rajpurohit" />
      <meta name="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Github Emojis | Akash Rajpurohit" />
      <meta
        name="twitter:description"
        content="Search shortcodes of emojis supported by Github"
      />
      <meta
        name="twitter:image"
        content="https://github-emojis.vercel.app/banner.png"
      />
      <meta
        name="twitter:image:alt"
        content="Github Emojis | Akash Rajpurohit"
      />
      <meta name="twitter:site" content="Github Emojis | Akash Rajpurohit" />
      <meta name="twitter:author" content="AkashWhoCodes" />
      <meta name="robots" content="index, follow" />
      <meta
        name="keywords"
        content="github emojis, emojis in github, github commit emojis, github icons for commits"
      />
    </Head>
    <Container>
      <Hero />
      <DarkModeSwitch />
      <Main />
      <Footer>
        <Text>
          Made with ❤️ by{' '}
          <Link href="https://akashrajpurohit.cf" target="_blank">
            Akash Rajpurohit
          </Link>
        </Text>
      </Footer>
    </Container>
  </>
);

export default Index;
