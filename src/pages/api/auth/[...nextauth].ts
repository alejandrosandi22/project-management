import NextAuth from 'next-auth';
import TwitterProvider from 'next-auth/providers/twitter';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import EmailProvider from 'next-auth/providers/email';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../lib/mongodb';
import { sendVerificationRequest } from '../lib/verificationRequest';

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
      version: '2.0',
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // Passwordless / email sign in
    EmailProvider({
      server: {
        host: process.env.NODEMAILER_SMTP,
        port: process.env.NODEMAILER_PORT,
        secure: true,
        auth: {
          user: process.env.NODEMAILER_EMAIL,
          pass: process.env.NODEMAILER_PASS,
        },
      },
      from: process.env.NODEMAILER_EMAIL,
      sendVerificationRequest,
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/',
    signOut: '/signin',
    error: '/signin?status=error',
    verifyRequest: '/signin/verify-request',
    newUser: '/',
  },
});
