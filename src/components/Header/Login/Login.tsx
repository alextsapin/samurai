import React from 'react'
import {NavLink} from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip'
import css from './Login.module.scss'
import LoginIcon from '@mui/icons-material/Login'
import Avatar from '@mui/material/Avatar'

type propsType = {
    link: null | string
}

const Login = (props: propsType) => {

    console.log(props)

    let url: string = ''

    React.useEffect(() => {
        if(props.link !== null) {
            url = props.link
        }
    }, [props.link])

    return (
        <Tooltip title="Login">
            <NavLink to="/login" className={css.link}>
                <LoginIcon fontSize="large"/>
            </NavLink>
        </Tooltip>
    )
}

export default Login