import { Link, Text } from '@chakra-ui/react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import CommonEmojis from '../components/CommonEmojis';
import { Container } from '../components/Container';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { Footer } from '../components/Footer';
import { GithubCorner } from '../components/GithubCorner';
import { Hero } from '../components/Hero';
import { Main } from '../components/Main';
import commonEmojis from '../data/commonEmojis.json';
import { IEmoji } from '../interfaces/IEmoji';
import { getEmojis } from '../lib/emojis';

const Index = ({
  emojis,
  commonEmojis,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
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
      <meta
        name="google-site-verification"
        content="iEqlK8IMwcehLYGwiM5MpzjoeqRnWytNQk87XIaN72U"
      />
    </Head>
    <Container>
      <Hero />
      <DarkModeSwitch />
      <GithubCorner />
      <CommonEmojis emojis={commonEmojis} />
      <Main emojis={emojis} />
      <Footer>
        <Text>
          Made with ❤️ by{' '}
          <Link
            href="https://akashrajpurohit.com/"
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

export const getStaticProps: GetStaticProps = async () => {
  const emojisData: Record<string, string> = await getEmojis();
  const commonEmojisData: IEmoji[] = commonEmojis;

  const emojiObjToArray: IEmoji[] = Object.keys(emojisData).map(
    (code: string) => {
      return {
        code: `:${code}:`,
        img: emojisData[code] as string,
      };
    }
  );

  return {
    props: {
      emojis: emojiObjToArray,
      commonEmojis: commonEmojisData,
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};

export default Index;
