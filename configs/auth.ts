import { AuthOptions, User } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';

let hostUrl = '';

if (process.env.NODE_ENV !== 'production') {
  hostUrl = 'http://localhost:3000';
} else {
  hostUrl = 'https://aston-lyceum.vercel.app';
}

const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email', required: true },
        password: { label: 'Password', type: 'password', required: true },
      },
      async authorize(credentials) {
        // проверка на наличие введенной пары логин/пароль
        // возврат null означает, что авторизация не осуществлена
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        // логика  поиска юзера по переданным credentials
        const response = await fetch(`${hostUrl}/api/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });

        const user: User = await response.json();

        if (!!user) {
          // любой возвращаемый объект сохраняется в свойство 'user' в JWT
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/signin',
  },
  session: {
    maxAge: 432000,
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === 'update') {
        return { ...token, ...session.user };
      }

      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
};

export { authConfig };
