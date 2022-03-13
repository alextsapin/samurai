import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import MyPosts from './components/Profile/MyPosts/MyPosts';
import Dialogs from './components/Dialogs/Dialogs'
import {Route, Routes} from 'react-router-dom';

import './sass/style.scss';

const App = () => {
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Navbar/>
                    </div>
                    <div className="col-md-8">
                        <Routes>
                            <Route path='/dialogs' element={<Dialogs/>}/>
                            <Route path='/myposts' element={<MyPosts/>}/>
                        </Routes>
                    </div>    
                </div>
            </div>
        </div>
    );
}

export default App;