import React from 'react';
import css from './style.module.scss'

const Navbar = () => {
    return (
        <nav className={css.menu}>
            <div className={css.item}>
                <a className={css.link} href="#">Profile</a>
            </div>

            <div className={css.item}>
                <a className={css.link} href="#">Messages</a>
            </div>

            <div className={css.item}>
                <a className={css.link} href="#">News</a>
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