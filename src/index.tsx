import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import store from "./redux/store";
import {Provider} from 'react-redux';

let postBox = [
    {id: 1, message: "Hello !", likeCount: 7},
    {id: 2, message: "Z & V", likeCount: 12}
]

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App postBox={postBox}/>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));