import logo from '../../images/logo.svg';

const Header = () => {
    return (
        <header>
            <div className="container">
                <img className="logo" src={logo} alt="logo"/>
            </div>
        </header>
    );
}

export default Header;