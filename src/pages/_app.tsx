import { AppProps } from 'next/app';
import ApolloProviderWrapper from '../app/lib/apollo-provider';
import RootLayout from '@/app/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProviderWrapper>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ApolloProviderWrapper>
  );
}

export default MyApp;