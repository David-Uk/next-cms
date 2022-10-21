import { Button } from 'antd';
import ToggleTheme from './../components/ToggleTheme';

function Home() {

    return (
        <div>
            <h1>index</h1>
            <Button type="primary">Click Me</Button>
            <br />
            <ToggleTheme />
        </div>
    )
}

export default Home