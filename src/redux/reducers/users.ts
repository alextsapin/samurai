import {Dispatch} from 'redux';
import {v1} from 'uuid';
import {getAllUsersAPI} from '../../api/api'

const initialState = {
    userBox: null
}

const usersReducer = (state = initialState, action: any) => {
    switch(action.type) {

        case 'FOLLOW':
        return {
           // ...state, userBox: state.userBox.map(item => item.id === action.id ? item.followed = true : item)
        }

        case 'SET_USERS':
        return {
            ...state, userBox: action.data
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

const setUsersAC = (data: any) => ({
    type: 'SET_USERS',
    data
})

export const getUsersTC = () => {
    return (dispatch: Dispatch) => {
        getAllUsersAPI().then(data => {
            dispatch(setUsersAC(data))
        })
    }
}

export default usersReducer;