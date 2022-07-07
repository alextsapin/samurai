import {Dispatch} from 'redux'
import {authAPI} from '../../api/api'

type userData = {
    id: null | number,
    email: null | string
    login: null | string
}

const initialState = {
    id: null,
    email: null,
    login: null
}

const authReducer = (state = initialState, action: any) => {
    switch(action.type) {

        case 'SET_USER_DATA':
        return {
            ...state, ...action.payload
        }

        default:
        return state
    }
}

export default authReducer

const setUserDataAC = (id: number| null, login: string | null, email: string | null) => ({
    type: 'SET_USER_DATA',
    payload: {
        id,
        login,
        email
    }
})

// Thunk creators
export const setUserDataTC = () => {
    return (dispatch: Dispatch) => {
        authAPI().then(response => {
            if(response.resultCode === 0) {
                const {id, login, email} = response.data
                dispatch(setUserDataAC(id, login, email))
            } else {
                dispatch(setUserDataAC(null, null, null))
            }
        })
    }
}