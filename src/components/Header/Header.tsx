import React from 'react';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import {NavLink} from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';
import {Img} from 'react-image';
import Tooltip from '@mui/material/Tooltip';

import logo from '../../images/logo.png';
import css from './css.module.scss';

import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';


const Header = () => {
    const [active, toggleActive] = React.useState(false);

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
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                        <Tooltip title="Logout">
                            <LogoutIcon fontSize="large"/>
                        </Tooltip>
                        
                    </div>

                    <button className={css.menuButton} onClick={showMoblileMenu}>
                        <MenuIcon fontSize="large"/>
                    </button>
                </div>
            </Container>
        </AppBar>
    )
}

export default Header;