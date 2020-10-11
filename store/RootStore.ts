import UiStore from './UiStore'

export interface IRootStore {
  ui: UiStore
}

class RootStore implements IRootStore {
  ui: UiStore
  constructor() {
    this.ui = new UiStore()
  }
}

export default RootStore
