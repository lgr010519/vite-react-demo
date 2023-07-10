import Search from './views/Search'
import Login from './views/Login'
import {Navigate} from 'react-router-dom'

export default [
    {
        path: '/search',
        element: <Search/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/',
        element: <Navigate to="/search"/>
    }
]