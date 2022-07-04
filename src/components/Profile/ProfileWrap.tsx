import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {Img} from 'react-image';
import Skeleton from '@mui/material/Skeleton';
import Button from '@mui/material/Button';
import user from '../../images/user.png';
import Preloader from '../Preloader/Preloader';

import {getAllUsersSL, getUsersCountSL, getPageSizeSL, getСurrentPageSL, getPageArraySL} from '../../redux/selectors/users';
import {getUsersTC} from '../../redux/reducers/users';

import css from './css.module.scss';
import {getUserProfileTC} from '../../redux/reducers/profile';
import {getUserProfileSL} from '../../redux/selectors/profile';
import {AppStateType} from '../../redux/store';


type propsType = {
    userProfile: any
    getUserProfileTC: (id: number) => void
}

class ProfileWrap extends React.Component<propsType> {

    componentDidMount() {
        this.props.getUserProfileTC(7020);
    }

    getUserProfile() {
        this.props.getUserProfileTC(7020);
    }

    render() {
        //console.log(this.props.userProfile)
        if(this.props.userProfile === null) {
            return <Preloader/>
        }
        
        return (
            <div>
                <button onClick={this.getUserProfile}>Get info</button>
                <Profile {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        userProfile: getUserProfileSL(state)
    }
}

export default connect(mapStateToProps, {getUserProfileTC})(ProfileWrap);