import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { wrapper } from '../store/store';

function MyApp({ Component, pageProps }: AppProps) {
    const { store, props } = wrapper.useWrappedStore(pageProps);
    return (
        <Provider store={store}>
            <Component {...props} />
        </Provider>
    );
}

export default wrapper.withRedux(MyApp);
