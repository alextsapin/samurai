import React from 'react';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs'
import {Route, Routes} from 'react-router-dom';
import Profile from './components/Profile/Profile';
import UserBox from './components/Users/Users';
import Footer from './components/Footer/Footer';
import Container from '@mui/material/Container';
import './main.scss';

const App = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<UserBox/>}/>
                <Route path='/dialogs' element={<Dialogs/>}/>
                <Route path='/profile' element={<Profile/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;