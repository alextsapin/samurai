import React from 'react'
import {NavLink} from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip'
import css from './Login.module.scss'
import LoginIcon from '@mui/icons-material/Login'

const Login = () => {
    return (
        <Tooltip title="Login">
            <NavLink to="/login" className={css.link}>
                <LoginIcon fontSize="large"/>
            </NavLink>
        </Tooltip>
    )
}

export default Login