import { css } from '@emotion/css'
import tw from '@tailwindcssinjs/macro'
import { observer } from 'mobx-react'
import { signIn, signOut, useSession } from 'next-auth/client'

import Button from './Button'

const Header: React.FC = (): JSX.Element => {
  const [session, loading] = useSession()
  return (
    <div hidden={loading}>
      {!session && <Button onClick={signIn}>Sign in</Button>}
      {session && (
        <>
          <span className={css(tw`text-sm mr-2`)}>{session.user.name}</span>
          <button className={css(tw`text-sm font-bold`)} onClick={() => signOut()}>
            Sign out
          </button>
        </>
      )}
    </div>
  )
}

export default observer(Header)
