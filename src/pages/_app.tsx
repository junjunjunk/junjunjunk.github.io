import { AppStyleProvider } from '../styles/AppStyleProvider';

function MyApp({ Component, pageProps }) {
  return (
    <AppStyleProvider>
      <Component {...pageProps} />
    </AppStyleProvider>
  );
}

export default MyApp;
