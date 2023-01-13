import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from '@next/font/google';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <style jsx global>{`
        html,
        body {
          font-family: ${inter.style.fontFamily}, Roboto, system-ui,
            -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu,
            Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
      `}</style>
      <SessionProvider session={session}>
        <ThemeProvider enableSystem={true} attribute='class'>
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}
