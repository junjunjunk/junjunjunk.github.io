import React from 'react';
import { AppStyleProvider } from '../styles/AppStyleProvider';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <AppStyleProvider>
      <Component {...pageProps} />
    </AppStyleProvider>
  );
}

export default MyApp;
