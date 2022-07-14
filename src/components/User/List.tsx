import React from 'react';
import {connect} from 'react-redux';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Preloader from '../UI/Preloader/Preloader';
import Paginator from '../Paginator/Paginator';
import User from './Card/Card';
import {getAllUsersSL, getUsersCountSL, getPageSizeSL, getСurrentPageSL, getPageArraySL} from '../../redux/selectors/users';
import {getUsersTC} from '../../redux/reducers/users';
import css from './List.module.scss';

type UserBoxPropsType = {
    usersCount: number
    currentPage: number
    pageSize: number
    pageArray: Array<number>
    userBox: Array<{
        id: number
        name: string
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
                    id={item.id}
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