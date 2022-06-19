import React from 'react'
import {getAllUsersSL} from '../../redux/selectors/users';
import {connect} from 'react-redux';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {getUsersTC} from '../../redux/reducers/users';
import {Img} from 'react-image';
import Skeleton from '@mui/material/Skeleton';
import Button from '@mui/material/Button';
import user from '../../images/user.png';
import Preloader from '../Preloader/Preloader';

type PropsType = {
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
    getUsersTC: () => void
}

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
                    ? <Img className="user__avatar" src={props.photo} loader={<Skeleton variant="circular" width={40} height={40}/>} alt="img"/>
                    : <Img className="user__avatar" src={user} loader={<Skeleton variant="circular" width={40} height={40}/>} alt="img"/>
                }

                <Button className="user__button" variant="contained">FOLLOW</Button>

            </Paper>
        </Grid>
    )
}

class UserBox extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsersTC()
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
                <Grid container spacing={3} className="p-0">
                    {UserBoxJSX}
                </Grid>
            </Container>

        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        userBox: getAllUsersSL(state)
    }
}

export default connect(mapStateToProps, {getUsersTC})(UserBox);