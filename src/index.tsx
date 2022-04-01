import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

let postBox = [
    {id: 1, message: "Hello !", likeCount: 7},
    {id: 2, message: "Z & V", likeCount: 12}
]

ReactDOM.render(
    <BrowserRouter>
        <App postBox={postBox}/>
    </BrowserRouter>, document.getElementById('root'));