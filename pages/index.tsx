import { css } from '@emotion/css'
import tw from '@tailwindcssinjs/macro'

import Container from '../components/Container'
import Header from '../components/Header'

const Index: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Container>
        <div className={css(tw`mb-4 text-center p-10`)}>
          <h1 className={css(tw`text-5xl`)}>Next.js</h1>
          <p>MobX, NextAuth.js, TailwindCSS, Emotion, Typescript, PostgreSQL</p>
        </div>
      </Container>
    </>
  )
}

export default Index
