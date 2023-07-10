import './App.scss'
import {useRoutes} from 'react-router-dom'
import routes from "./routes.tsx";
import {ConfigProvider} from "antd";

export const App = () => {
    const element = useRoutes(routes)

    return (
        <div className="App">
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#1890ff',
                    },
                }}
            >
                {element}
            </ConfigProvider>
        </div>
    )
}

export default App
