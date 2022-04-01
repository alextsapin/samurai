import {NavLink} from 'react-router-dom';
import logo from '../../images/logo.svg';

const Header = () => {
    return (
        <header>
            <div className="container">
                <NavLink to="/">
                    <img className="logo" src={logo} alt="logo"/>
                </NavLink>
            </div>
        </header>
    );
}

export default Header;