import React from 'react';
import PostBox from './PostsBox/PostBox';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import css from './style.module.scss'

const Profile = () => {
    return (
        <div className="mt-5">
            <ProfileInfo/>
            <PostBox/>
        </div>
    )
}

export default Profile;