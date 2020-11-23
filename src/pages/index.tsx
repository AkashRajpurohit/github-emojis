import { Text, Link } from '@chakra-ui/react';
import Head from 'next/head';

import { GithubCorner } from '../components/GithubCorner';
import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { Footer } from '../components/Footer';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { IEmoji } from '../interfaces/IEmoji';
import { VisitorCount } from '../components/VisitorCount';

import emojis from '../data/emojis.json';

const Index = ({
  emojis,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <>
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
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
      <link rel="manifest" href="manifest.json" />
      <link
        href="/android-chrome-192x192.png"
        rel="icon"
        type="image/png"
        sizes="192x192"
      />
      <link
        href="/android-chrome-512x512.png"
        rel="icon"
        type="image/png"
        sizes="512x512"
      />
      <link rel="apple-touch-icon" href="/apple-icon.png" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="Github Emojis" />
      <meta name="apple-mobile-web-app-title" content="Github Emojis" />
      <meta name="theme-color" content="#171923" />
      <meta name="msapplication-navbutton-color" content="#171923" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="msapplication-starturl" content="/" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
    <Container>
      <Hero />
      <VisitorCount slug="/" />
      <DarkModeSwitch />
      <GithubCorner />
      <Main emojis={emojis} />
      <Footer>
        <Text>
          Made with ❤️ by{' '}
          <Link
            href="https://akashrajpurohit.cf"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            Akash Rajpurohit
          </Link>
        </Text>
      </Footer>
    </Container>
  </>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const data: Record<string, string> = emojis;

  const emojiObjToArray: IEmoji[] = Object.keys(data).map((code: string) => {
    return {
      code: `:${code}:`,
      img: data[code] as string,
    };
  });

  return {
    props: {
      emojis: emojiObjToArray,
    },
  };
};

export default Index;
