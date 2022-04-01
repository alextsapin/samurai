import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs'
import {Route, Routes} from 'react-router-dom';
import Profile from './components/Profile/Profile';

import './sass/style.scss';

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
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Navbar/>
                    </div>
                    <div className="col-md-8">
                        <Routes>
                            <Route path='/dialogs' element={<Dialogs/>}/>
                            <Route path='/profile' element={<Profile/>}/>
                        </Routes>
                    </div>    
                </div>
            </div>
        </div>
    );
}

export default App;