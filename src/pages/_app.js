import "modern-normalize/modern-normalize.css";
import "@/styles/globals.scss";

import { ApolloProvider } from '@apollo/client/react';
import queryClient from '@/data/query-client';

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={queryClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
