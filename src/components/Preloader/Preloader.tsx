import Container from '@mui/material/Container';
import spinner from '../../images/spinner.gif'

const Preloader = () => {
    return (
        <Container fixed>
            <img className="preloader" src={spinner} alt="spinner"/>
        </Container>

    )
}

export default Preloader;