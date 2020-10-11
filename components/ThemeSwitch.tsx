import { css, cx } from '@emotion/css'
import tw from '@tailwindcssinjs/macro'
import { observer } from 'mobx-react'
import { useCallback } from 'react'

import { useStore } from '../store'
import { Theme } from '../store/UiStore'

const styles = {
  button: css(tw`
    font-bold text-sm bg-transparent px-2 py-1 rounded-sm h-auto inline-block
    focus[outline-none bg-indigo-600 text-white]
  `),
  buttonActive: css(tw`bg-indigo-500 text-white`),
}

const ThemeSwitch: React.FC = (): JSX.Element => {
  const { ui } = useStore()
  const setLight = useCallback(() => ui.setTheme(Theme.Light), [ui])
  const setDark = useCallback(() => ui.setTheme(Theme.Dark), [ui])
  return (
    <>
      <div className={css(tw`space-x-4`)}>
        <button className={cx(styles.button, !ui.isDarkTheme && styles.buttonActive)} onClick={setLight}>
          Light
        </button>
        <button className={cx(styles.button, ui.isDarkTheme && styles.buttonActive)} onClick={setDark}>
          Dark
        </button>
      </div>
    </>
  )
}

export default observer(ThemeSwitch)
