import redux from '../../images/redux.png';
import Container from '@mui/material/Container';

const Footer = () => {
    return (
        <footer>
            <Container fixed>
                <img className="footer__img" src={redux} alt="redux"/>
            </Container>
        </footer>
    );
}

export default Footer;