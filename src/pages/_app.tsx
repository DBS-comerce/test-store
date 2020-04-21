import { AppProps } from 'next/app';
import React from 'react';
import '../static/index.scss';
import store from '../store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    console.log(pageProps);
    return (
        <Provider store={store}>
            <Component {...pageProps} />;
        </Provider>
    );
}

export default MyApp;
