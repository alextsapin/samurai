import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import PostBox from './PostsBox/PostBox';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import css from './style.module.scss'

// Thunk creators
import {addPostTC} from '../../redux/reducers/main';


const Profile = (props: any) => {
    return (
        <div className="mt-5">
            <ProfileInfo/>
            <PostBox/>
        </div>
    )
}


// Контейнерная компонента Profile
let mapStateToProps = (state: any) => {
    return {

    }
}

export default compose(connect(null, {addPostTC}))(Profile);