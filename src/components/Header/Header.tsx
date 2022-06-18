import {NavLink} from 'react-router-dom';
import logo from '../../images/logo.png';
import Container from '@mui/material/Container';

const Header = () => {
    return (
        <header>
            <div className="container">
                <NavLink to="/">
                    <img className="logo" src={logo} alt="logo"/>
                </NavLink>

                <ul>
                    <li>
                        <NavLink to="/profile">Profile</NavLink>
                    </li>

                    <li>
                        <NavLink to="/dialogs">Dialogs</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;