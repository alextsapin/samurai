import React from 'react';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs'
import {Route, Routes} from 'react-router-dom';
import Profile from './components/Profile/Profile';
import UserBox from './components/Users/Users';
import Footer from './components/Footer/Footer';
import Container from '@mui/material/Container';
import './style.scss';

type PostType = {
    id: number
    message: string
    likeCount: number
}

type AppPropsType = {
    postBox?: Array<PostType>
}

const App = (props: AppPropsType) => {
    return (
        <div>
            <Header/>
            <Container fixed>
                <Routes>
                    <Route path='/' element={<UserBox/>}/>
                    <Route path='/dialogs' element={<Dialogs/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                </Routes>
            </Container>
            <Footer/>
        </div>
    );
}

export default App;