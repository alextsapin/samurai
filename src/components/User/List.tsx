import React from 'react';
import {connect} from 'react-redux';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {Img} from 'react-image';
import Skeleton from '@mui/material/Skeleton';
import Button from '@mui/material/Button';
import user from '../../images/user.png';
import Preloader from '../UI/Preloader/Preloader';
import Paginator from '../Paginator/Paginator';

import {getAllUsersSL, getUsersCountSL, getPageSizeSL, getСurrentPageSL, getPageArraySL} from '../../redux/selectors/users';
import {getUsersTC} from '../../redux/reducers/users';

import css from './css.module.scss';

type UserPropsType = {
    name: string
    id?: number
    uniquerName?: null
    photo: string
    status: null | string
    followed?: boolean
}

const User = (props: UserPropsType) => {
    return (
        <Grid item lg={3} md={4} sm={6} xs={12}>
            <Paper className="user" elevation={3}>
                <p className="user__name">{props.name}</p>
                <p className="user__status">{props.status !== null ? props.status : '...'}</p>
                {
                    props.photo !== null
                    ? <Img className="user__avatar" src={props.photo} loader={<Skeleton variant="circular" width={100} height={100}/>} alt="ava"/>
                    : <Img className="user__avatar" src={user} loader={<Skeleton className="user__avatar" variant="circular" width={100} height={100}/>} alt="ava"/>
                }
                <Button className="user__button" variant="contained">FOLLOW</Button>
            </Paper>
        </Grid>
    )
}

type UserBoxPropsType = {
    usersCount: number
    currentPage: number
    pageSize: number
    pageArray: Array<number>
    userBox: Array<{
        name: string
        id: number
        uniquerName?: null
        photos: {
            small: null | string
            large: null | string
        }
        status: null | string
        followed: boolean
    }>
    getUsersTC: (currentPage: number, usersCount: number, pageSize: number) => void
}

class UserList extends React.Component<UserBoxPropsType> {
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.usersCount, this.props.pageSize)
    }

    getPages = () => {
        this.props.getUsersTC(this.props.currentPage, this.props.usersCount, this.props.pageSize)
    }

    pageChangeHandler = (pageNumber: number) => {
        this.props.getUsersTC(pageNumber, this.props.usersCount, this.props.pageSize)
    }

    render() {
        if(this.props.userBox === null) {
            return <Preloader/>
        }

        const UserBoxJSX = this.props.userBox.map((item: any, index: number) => {
            return (
                <User 
                    key={index} 
                    name={item.name} 
                    status={item.status}
                    photo={item.photos.small}
                />
            )
        })
        
        return (
            <Container fixed>
                <button onClick={this.getPages}>Get pages</button>
                <h1 className="title title_first">
                    Всего <span className={css.count}>{new Intl.NumberFormat('ru-RU').format(this.props.usersCount)}</span> пользователей
                </h1>
                <Grid container spacing={3} className="p-0">
                    {UserBoxJSX}
                </Grid>
                <Paginator 
                    currentPage={this.props.currentPage} 
                    pageArray={this.props.pageArray} 
                    pageChange={(pageNumber: number) => this.pageChangeHandler(pageNumber)}
                />
            </Container>

        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        usersCount: getUsersCountSL(state),
        userBox: getAllUsersSL(state),
        pageSize: getPageSizeSL(state),
        currentPage: getСurrentPageSL(state),
        pageArray: getPageArraySL(state)
    }
}

export default connect(mapStateToProps, {getUsersTC})(UserList);