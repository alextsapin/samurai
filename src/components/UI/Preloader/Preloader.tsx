import Container from '@mui/material/Container'
import spinner from '../../../images/spinner.gif'
import css from './Preloader.module.scss'

const Preloader = () => {
    return (
        <Container fixed>
            <img className={css.item} src={spinner} alt="spinner"/>
        </Container>
    )
}

export default Preloader