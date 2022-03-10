import Header from './components/Header';
import Technologies from './Technologies';
import Navbar from './components/navbar/Navbar';

import './style.scss';

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
                        <Technologies/>
                    </div>    
                </div>
            </div>
        </div>
    );
}

export default App;