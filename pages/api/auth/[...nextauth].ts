// NextAuth.js: https://next-auth.js.org/
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
}

export default (req: any, res: any) => NextAuth(req, res, options)
