import Head from 'next/head';
import type { AppProps } from 'next/app';
import { NavBar } from '../components/utils/NavBar';
import { ScrollToTopButton } from '../components/utils/ScrollToTopButton';
import { Footer } from '../components/utils/Footer';
import '../styles/main.scss';

const App = ({ Component, pageProps }: AppProps) => (
    <div className="root">
        <Head>
            <meta charSet="utf-8" />

            <meta name="theme-color" content="#00c2cc" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <title>Shutoko Revival Project</title>

            <meta
                key="description"
                name="description"
                content="Official Shutoko Revival Project website, the definite version of Shutoko Expressway for Assetto Corsa."
            />
            <meta
                key="og:title"
                name="og:title"
                content="Shutoko Revival Project"
            />
            <meta
                key="og:description"
                name="og:description"
                content="Official Shutoko Revival Project website, the definite version of Shutoko Expressway for Assetto Corsa."
            />
            <meta
                key="og:image"
                name="og:image"
                content="/A32NX_Front.jpeg"
            />
        </Head>
        <NavBar />
        <ScrollToTopButton />
        <Component {...pageProps} />
        <Footer />
    </div>
);

export default App;
