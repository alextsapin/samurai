import React from 'react';
import {NavLink} from 'react-router-dom';
import css from './style.module.scss'


const Navbar = () => {
    return (
        <nav className={css.menu}>
            <div className={css.item}>
                <NavLink to="/myposts" className = {navData => navData.isActive ? css.active : css.link}>My posts</NavLink>
            </div>

            <div className={css.item}>
                <NavLink to="/dialogs" className = {navData => navData.isActive ? css.active : css.link}>Dialogs</NavLink>
            </div>

            <div className={css.item}>
                <a className={css.link} href="#">Music</a>
            </div>

            <div className={css.item}>
                <a className={css.link} href="#">Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;