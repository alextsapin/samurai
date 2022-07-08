import React from 'react'
import Tooltip from '@mui/material/Tooltip'
import css from './Logout.module.scss'
import LogoutIcon from '@mui/icons-material/Logout'

const Logout = () => {
    return (
        <Tooltip title="Logout">
            <button className={css.button}>
                <LogoutIcon fontSize="large"/>
            </button>
        </Tooltip>

    )
}

export default Logout