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

            <App store={store} state={store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}
                 addMessage={store.addMessage.bind(store)}
                 updateMessageText={store.updateMessageText.bind(store)} />
        </BrowserRouter>,
        document.getElementById('root'));

}

rerenderEntireTree();
store.subscribe(rerenderEntireTree);

serviceWorker.unregister();

