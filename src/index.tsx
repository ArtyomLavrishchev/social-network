import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/state";

const rerenderEntireTree = () => {

    ReactDOM.render(
        <BrowserRouter>

            <App store={store} state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root'));

}

rerenderEntireTree();
store.subscribe(rerenderEntireTree);

serviceWorker.unregister();

