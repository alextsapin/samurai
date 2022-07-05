import React from 'react';
import Profile from './Profile/Profile';
import {connect} from 'react-redux';
import Preloader from '../UI/Preloader/Preloader';
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

export default connect(mapStateToProps, {getUserProfileTC})(ProfileWrap);