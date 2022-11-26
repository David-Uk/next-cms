import { ThemeProvider } from "../context/theme/theme"
import '/public/css/styles.css'
import TopNav from './../components/TopNav/TopNav';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from "../context/auth/auth";

function MyApp({ Component, pageProps }) {
    return (<ThemeProvider>
        <AuthProvider>
            <TopNav />
            <Toaster />
            <Component {...pageProps} />
        </AuthProvider>
    </ThemeProvider>
    );
}

export default MyApp