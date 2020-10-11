import App, { AppProps } from 'next/app'
import { Provider as StoreProvider } from 'mobx-react'
import { Provider as AuthProvider } from 'next-auth/client'

import '../styles/base.css'

import { initRootStore } from '../store'
import { IRootStore } from '../store/RootStore'

class RootApp extends App {
  store: IRootStore
  constructor(props: AppProps) {
    super(props)
    this.store = initRootStore()
  }

  render(): JSX.Element {
    const { Component, pageProps } = this.props
    return (
      <AuthProvider session={pageProps.session}>
        <StoreProvider {...this.store}>
          <Component {...pageProps} />
        </StoreProvider>
      </AuthProvider>
    )
  }
}

export default RootApp
