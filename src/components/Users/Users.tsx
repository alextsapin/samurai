import {getAllUsersSL} from '../../redux/selectors/users';
import {compose} from 'redux';
import {connect} from 'react-redux';

type PropsType = {

}

const UserBox = (props: PropsType) => {
    console.log(props)
    return (
        <div>999</div>

    );
}

const mapStateToProps = (state: any) => {
    return {
        useBox: getAllUsersSL(state)
    }
}

export default connect(mapStateToProps, {})(UserBox);