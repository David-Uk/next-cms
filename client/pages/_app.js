import { ThemeProvider } from "../context/theme/theme"
import '/public/css/styles.css'
import TopNav from './../components/TopNav/TopNav';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
    return (<ThemeProvider>
        <TopNav />
        <Toaster />
        <Component {...pageProps} />
    </ThemeProvider>
    );
}

export default MyApp