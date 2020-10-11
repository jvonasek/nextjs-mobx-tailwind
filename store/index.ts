import { createContext, useContext } from 'react'
import { enableStaticRendering } from 'mobx-react'
import RootStore, { IRootStore } from './RootStore'

const isServer = typeof window === 'undefined'
enableStaticRendering(isServer)

let store = null

export const StoreContext = createContext<IRootStore>(initRootStore())

export const useStore = (): IRootStore => {
  return useContext<IRootStore>(StoreContext)
}

export function initRootStore(): IRootStore {
  const _store = store ?? new RootStore()

  // For SSG and SSR always create a new store
  if (isServer) return _store
  // Create the store once in the client
  if (!store) store = _store
  return _store
}
