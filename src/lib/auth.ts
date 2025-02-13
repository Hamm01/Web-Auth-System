import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { db } from '@/drizzle/db' // your drizzle instance
import { nextCookies } from 'better-auth/next-js'
import { sendPasswordResetEmail } from './emails/password-reset-email'
import { sendEmailVerification } from './emails/email-verification'

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async ({ user, url }) => {
      await sendPasswordResetEmail({ user, url })
    }
  },
  emailVerification: {
    autoSignInAfterVerification: true,
    sendOnSignUp: true,
    sendVerificationEmail: async ({ user, url }) => {
      await sendEmailVerification({ user, url })
    }
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!
    },
    discord: {
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!
    }
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge6: 60 * 5
    }
  },
  plugins: [nextCookies()],
  database: drizzleAdapter(db, {
    provider: 'pg'
  })
})
