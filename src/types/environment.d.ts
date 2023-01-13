declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ENV: 'test' | 'dev' | 'prod';
      FACEBOOK_ID: string;
      FACEBOOK_SECRET: string;
      GOOGLE_ID: string;
      GOOGLE_SECRET: string;
      TWITTER_ID: string;
      TWITTER_SECRET: string;
      NODEMAILER_SMTP: string;
      NODEMAILER_PORT: number;
    }
  }
}

export {};
