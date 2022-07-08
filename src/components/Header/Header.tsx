import React from 'react'
import AppBar from '@mui/material/AppBar'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import {NavLink} from 'react-router-dom'
import Skeleton from '@mui/material/Skeleton'
import {Img} from 'react-image'
import Tooltip from '@mui/material/Tooltip'
import logo from '../../images/logo.png'
import css from './Header.module.scss'
import LogoutIcon from '@mui/icons-material/Logout'
import {setAuthAvaTC, setUserDataTC} from '../../redux/reducers/auth'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from '../../redux/store'
import {getUserProfileTC} from '../../redux/reducers/profile'
import Login from './Login/Login'
import Logout from './Logout/Logout'

const Header = () => {

    const id = useSelector<AppStateType, number | null>(state => state.auth.id)
    const avaLink = useSelector<AppStateType, string | null>(state => state.auth.avaLink) 
    
    const [active, toggleActive] = React.useState(false)
    
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(setUserDataTC())
    }, [])

    React.useEffect(() => {
        console.log(id)
        if(id !== null) {
            dispatch(setAuthAvaTC(id))
        }
    }, [id])
    
    const pages = [
        {
            title: 'Profile',
            href: '/profile'
        },
        {
            title: 'Dialogs',
            href: '/dialogs'
        }
    ];

    function showMoblileMenu() {
        toggleActive(!active)
    }

    function hideMenu() {
        setTimeout(function() { 
            toggleActive(false) 
        }, 1000)
    }

    const menuJSX = pages.map((item, index) => {
        return (
            <li key={index} onClick={hideMenu} className={css.item}>
                <NavLink to={item.href} className={css.link}>{item.title}</NavLink>
            </li>
        )
    })

    return (
        <AppBar position="static">
            <Container fixed>
                <div className={css.wrapper}>
                    <NavLink to="/">
                        <Img className={css.logo} src={logo} loader={<Skeleton variant="circular" width={50} height={50}/>} alt="logo"/>
                    </NavLink>

                    <ul className={active === false ? css.menu : css.menu + ' ' + css.active} >
                        {menuJSX}
                    </ul>

                    <div className={css.avatarBox}>
                        <Avatar src={avaLink !== null ? avaLink : ''} alt="ava"/>
                        {id === null ? <Login link={avaLink}/> : <Logout/>}
                    </div>

                    <button className={css.menuButton} onClick={showMoblileMenu}>
                        <MenuIcon fontSize="large"/>
                    </button>
                </div>
            </Container>
        </AppBar>
    )
}

export default Header