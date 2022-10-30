import { ThemeProvider } from "../context/theme/theme"
import '/public/css/styles.css'
import TopNav from './../components/TopNav/TopNav';

function MyApp({ Component, pageProps }) {
    return (<ThemeProvider>
        <TopNav />
        <Component {...pageProps} />
    </ThemeProvider>
    );
}

export default MyApp