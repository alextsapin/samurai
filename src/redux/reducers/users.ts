import {Dispatch} from 'redux';
import {v1} from 'uuid';

const initialState = {
    userBox: [
        {
            id: v1(),
            followed: false,
            fullName: 'Jora',
            status: 'Hello everyone!',
            location: {
                city: 'KLD',
                country: 'RF'
            }
        }
    ]
}

const usersReducer = (state = initialState, action: any) => {
    switch(action.type) {

        case 'FOLLOW':
        return {
            ...state, userBox: state.userBox.map(item => item.id === action.id ? item.followed = true : item)
        }

        default:
        return state
    }
}

const followAC = (id: string | number) => ({
    type: 'FOLLOW'
})

const unfollowAC = (id: string | number) => ({
    type: 'UPDATE_POST'
})

export const getUsersTC = () => {
    return (dispatch: Dispatch) => {
        //dispatch(editPostAC(id, newText))
    }
}

export default usersReducer;