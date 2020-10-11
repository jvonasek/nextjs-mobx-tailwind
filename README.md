# NextJS Boilerplate

Bootstrap a NextJS app configured with:

- [MobX](https://mobx.js.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Emotion](https://emotion.sh/)
- [Typescript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Running Docker

- [PostgreSQL](https://www.postgresql.org/) at port **5432**
- [Adminer](https://www.adminer.org/) at port **8080**

```bash
docker-compose up
```

## How to use

Required `.env` or `.env.local` file variables

```bash
NODE_ENV=development
NEXTAUTH_URL=http://localhost:3000
# NextAuth credentials for Github (Change provider in auth config)
GITHUB_CLIENT_ID=id
GITHUB_CLIENT_SECRET=secret
```
