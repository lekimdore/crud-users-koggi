import type { AppProps } from 'next/app';
import '@mantine/core/styles.css';
import RootProvider from '../providers';
import Layout from '../components/Layout';

const App = ({ Component, pageProps: { ...pageProps } }: AppProps) => (
  <RootProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </RootProvider>
);

export default App;
