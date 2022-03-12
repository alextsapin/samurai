import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import MyPosts from './components/Profile/MyPosts/MyPosts';

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
                        <MyPosts/>
                    </div>    
                </div>
            </div>
        </div>
    );
}

export default App;