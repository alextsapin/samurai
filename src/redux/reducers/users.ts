import {Dispatch} from 'redux';
import {v1} from 'uuid';
import {getAllUsersAPI, getUsersCountAPI} from '../../api/api'

const initialState = {
    userBox: null,
    usersCount: 0,
    pageSize: 16,
    currentPage: 4,
    pageArray: []
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

        case 'SET_USERS_COUNT':
        return {
            ...state, usersCount: action.count
        }

        case 'SET_CURRENT_PAGE':
        return {
            ...state, currentPage: action.currentPage
        }

        case 'SET_PAGE_ARRAY':
        return {
            ...state, pageArray: action.pageArray
        }

        default:
        return state
    }
}

const followAC = (id: string) => ({
    type: 'FOLLOW'
})

const unfollowAC = (id: string) => ({
    type: 'UPDATE_POST'
})

const setUsersAC = (data: any) => ({
    type: 'SET_USERS',
    data
})

const setUsersCountAC = (count: number) => ({
    type: 'SET_USERS_COUNT',
    count
})

const setCurrentPageAC = (currentPage: number) => ({
    type: 'SET_CURRENT_PAGE',
    currentPage
})

const setPageBoxAC = (pageArray: Array<number>) => ({
    type: 'SET_PAGE_ARRAY',
    pageArray
})

export const calcTotalPagesTC = (usersCount: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        let total = Math.ceil(usersCount / pageSize)
        let pageArray = []

        for(let i = 1; i <= total; i++) {
            pageArray.push(i)
        }

        dispatch(setPageBoxAC(pageArray))
    }
}

export const getAllUsersTC = (currentPage: number, usersCount: number, pageSize: number) => {
    return (dispatch: Dispatch) => {

        // Текущая страница
        dispatch(setCurrentPageAC(currentPage))

        // Число пользователей
        getUsersCountAPI().then(count => {
            dispatch(setUsersCountAC(count))
        })

        // Все пользователи
        getAllUsersAPI(currentPage, pageSize).then(data => {
            dispatch(setUsersAC(data))
        })

        dispatch(calcTotalPagesTC(usersCount, pageSize) as any)
    }
}

export default usersReducer;