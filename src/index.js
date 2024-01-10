import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import "bootstrap/dist/js/bootstrap.bundle.min"
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'
import { createRoot } from "react-dom/client"
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import middleware from './middleware'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const store = createStore(reducer, middleware);


root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>
);

