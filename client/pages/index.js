import { AuthContext } from '../context/auth/auth';
import { useContext } from 'react';

function Home() {
    const [auth, setAuth] = useContext(AuthContext)
    return (
        <div>
            <h1>index</h1>
            <br />
            <pre>{JSON.stringify(auth)}</pre>
        </div>
    )
}

export default Home