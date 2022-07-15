import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {Img} from 'react-image';
import Skeleton from '@mui/material/Skeleton';
import Button from '@mui/material/Button';
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../redux/store';
import Follow from '../Follow/Follow';
import css from './User.module.scss';
import user from '../../../images/user.png';
import { unFollowTC } from '../../../redux/reducers/users';

type UserPropsType = {
    id: number
    name: string
    photo: string
    status: null | string
    followed: boolean
    followUsers: Array<number>
    followTC: (id: number) => void
    unFollowTC: (id: number) => void
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
                <Follow id={props.id} followed={props.followed} followUsers={props.followUsers} unFollowTC={props.unFollowTC} followTC={props.followTC}/>
            </Paper>
        </Grid>
    )
}

export default User