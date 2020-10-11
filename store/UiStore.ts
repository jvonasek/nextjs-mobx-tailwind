import { makeAutoObservable, reaction } from 'mobx'

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

class UiStore {
  theme: Theme = Theme.Light

  constructor() {
    makeAutoObservable(this)
    reaction(
      () => this.theme,
      (theme: Theme) => {
        const root = window.document.documentElement
        root.classList.remove(...Object.values(Theme))
        root.classList.add(theme)
      }
    )
  }

  setTheme(theme: Theme): void {
    this.theme = theme
  }

  get isDarkTheme(): boolean {
    return this.theme === Theme.Dark
  }
}

export default UiStore
