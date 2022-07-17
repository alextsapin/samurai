import React from 'react';
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonAddDisabledIcon from '@mui/icons-material/PersonAddDisabled';
import css from './Follow.module.scss';

type PropsType = {
    id: number
    followed: boolean
    followUsers: Array<number>
    followTC: (id: number) => void
    unFollowTC: (id: number) => void
}

const Follow = (props: PropsType) => {
    console.log(props)
    if(props.followed) {
        return (
            <Button 
                disabled={props.followUsers.some(id => id === props.id)} 
                className={css.button}
                onClick={()=>{props.unFollowTC(props.id);}} 
                variant="contained">
                <PersonAddDisabledIcon/>
                <span className="ml-1">UNFOLLOW</span>
            </Button>)
    } else {
        return (
            <Button 
                disabled={props.followUsers.some(id => id === props.id)} 
                className={css.button} 
                onClick={()=>{props.followTC(props.id)}} variant="contained">
                <PersonAddIcon/>
                <span className="ml-1">FOLLOW</span>
            </Button>
        )
    }
}

export default Follow;