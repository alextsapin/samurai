import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {Img} from 'react-image';
import Skeleton from '@mui/material/Skeleton';
import Button from '@mui/material/Button';
import user from '../../../images/user.png';
import {NavLink} from 'react-router-dom';
import css from './Card.module.scss';

type UserPropsType = {
    id: number
    name: string
    photo: string
    status: null | string
    followed?: boolean
}

const User = (props: UserPropsType) => {
    return (
        <Grid item lg={3} md={4} sm={6} xs={12}>
            <Paper className={css.card} elevation={3}>
                <NavLink to={'/profile/' + props.id} className={css.name}>{props.name}</NavLink>
                <p className={css.status}>{props.status !== null ? props.status : '...'}</p>
                {
                        props.photo !== null
                    ?   <Img className={css.avatar} src={props.photo} loader={
                            <Skeleton className={css.avatar} variant="circular" width={100} height={100}/>} alt="ava"
                        />
                    :   <Img className={css.avatar} src={user} loader={
                            <Skeleton className={css.avatar} variant="circular" width={100} height={100}/>} alt="ava"
                        />
                }
                <Button className={css.button} variant="contained">FOLLOW</Button>
            </Paper>
        </Grid>
    )
}

export default User;