import {
  Text,
  Link,
} from '@chakra-ui/core'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Footer } from '../components/Footer'

const Index = () => (
  <Container>
    <Hero />
    <DarkModeSwitch />
    <Main />
    <Footer>
      <Text>Made with ❤️ by <Link href="https://akashrajpurohit.cf" target="_blank">Akash Rajpurohit</Link></Text>
    </Footer>
  </Container>
)

export default Index
