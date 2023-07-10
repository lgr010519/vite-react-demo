import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import {BrowserRouter} from 'react-router-dom';
import { createStore, applyMiddleware } from "redux";
import {Provider} from 'react-redux';
import Reducer from './redux';
import thunk from "redux-thunk";

const store = createStore(Reducer, applyMiddleware(thunk))

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
)

export default store