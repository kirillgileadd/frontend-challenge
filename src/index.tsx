import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createGlobalStyle} from "styled-components";
import {setupStore} from "./store/store";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const store = setupStore()

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

// HashRouter for gitHub pages
root.render(
    <HashRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <>
                <Global/>
                <App/>
            </>
        </Provider>
    </HashRouter>
);
