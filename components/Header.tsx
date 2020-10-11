import { css, cx } from '@emotion/css'
import tw from '@tailwindcssinjs/macro'
import { observer } from 'mobx-react'

import { useStore } from '../store'
import Container from './Container'
import HeaderLogin from './HeaderLogin'
import ThemeSwitch from './ThemeSwitch'

const styles = {
  header: css(tw`py-2 h-13 flex items-center`),
  headerLight: css(tw`bg-gray-100`),
  headerDark: css(tw`bg-gray-900`),
}

const Header: React.FC = (): JSX.Element => {
  const { ui } = useStore()
  return (
    <div
      className={cx(styles.header, {
        [styles.headerLight]: !ui.isDarkTheme,
        [styles.headerDark]: ui.isDarkTheme,
      })}
    >
      <Container className={css(tw`flex justify-between items-center`)}>
        <ThemeSwitch />
        <HeaderLogin />
      </Container>
    </div>
  )
}

export default observer(Header)
