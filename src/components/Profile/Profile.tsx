import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import PostBox from './PostsBox/PostBox';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import css from './style.module.scss'

const Profile = (props: any) => {
    return (
        <div className="mt-5">
            <PostBox/>
        </div>
    )
}

// Контейнерная компонента Profile
let mapStateToProps = (state: any) => {
    return {

    }
}

export default Profile;