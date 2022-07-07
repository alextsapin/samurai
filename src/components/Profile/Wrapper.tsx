import React, { Props } from 'react';
import withRouter from 'react-router'
import {compose} from 'redux';
import Profile from './Profile/Profile';
import {connect} from 'react-redux';
import Preloader from '../UI/Preloader/Preloader';
import {getUserProfileTC} from '../../redux/reducers/profile'
import {getUserProfileSL} from '../../redux/selectors/profile'
import {AppStateType} from '../../redux/store'

export type ProfilePropsType = {
    userProfile: {
        userId: number
        fullName: string
        aboutMe: string
        lookingForAJob: boolean
        lookingForAJobDescription: string
        contacts: {
            facebook: string | null
            github: string | null
            instagram: string | null
            mainLink: string | null
            twitter: string | null
            vk: string | null
            website: string | null
            youtube: string | null
        }
        photos: {
            small: string | null
            large: string | null
        }
    }
    getUserProfileTC: (id: number) => void
}

class ProfileWrap extends React.Component<ProfilePropsType> {

    componentDidMount() {
        this.props.getUserProfileTC(7020);
    }

    render() {
        if(this.props.userProfile === null) {
            return <Preloader/>
        }
        
        return (
            <div>
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

export default connect(mapStateToProps, {getUserProfileTC})(ProfileWrap)