import React from 'react';
import Header from './components/Header/Header';
import Dialogs from './components/Chat/Chat'
import {Route, Routes} from 'react-router-dom';
import Profile from './components/Profile/Wrapper';
import UserList from './components/User/List';
import Footer from './components/Footer/Footer';

import './font/OpenSans.css';
import './sass/main.scss';

const App = () => {
    console.log(process.env)
    return (
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<UserList/>}/>
                <Route path='/dialogs' element={<Dialogs/>}/>
                <Route path='/profile/' element={<Profile/>}>
                    <Route path=':id' element={<Profile/>}/>
                </Route>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;