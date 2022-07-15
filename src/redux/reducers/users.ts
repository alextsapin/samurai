import {Dispatch} from 'redux';
import {v1} from 'uuid';
import {getUsersAPI, getUsersCountAPI, followAPI, unFollowAPI} from '../../api/api'

const initialState = {
    isFetching: false,
    followUsers: [24944],
    userBox: null,
    usersCount: 0,
    pageSize: 16,
    currentPage: 1,
    pageArray: []
}

const usersReducer = (state = initialState, action: any) => {
    switch(action.type) {

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

        case 'TOGGLE_IS_FETCHING':
        return {
            ...state, isFetching: action.isFetching
        }

        case 'TOGGLE_USER_FOLLOW':
        return {
            ...state, followUsers: action.isFetching ? [...state.followUsers, action.id]: [state.followUsers.filter(id => id !== action.id)]
        }

        default:
        return state
    }
}

const toggleIsFetchingAC = (isFetching: boolean) => ({
    type: 'TOGGLE_IS_FETCHING',
    isFetching
})

const toggleUserFollowAC = (id: number, isFetching: boolean) => ({
    type: 'TOGGLE_IS_FETCHING',
    id,
    isFetching
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

export const getUsersTC = (currentPage: number, usersCount: number, pageSize: number) => {
    return (dispatch: Dispatch) => {

        dispatch(setUsersAC(null))

        // Текущая страница
        dispatch(setCurrentPageAC(currentPage))

        // Число пользователей
        getUsersCountAPI().then(count => {
            dispatch(setUsersCountAC(count))
        })

        // Все пользователи
        getUsersAPI(currentPage, pageSize).then(data => {
            dispatch(setUsersAC(data))
        })

        dispatch(calcTotalPagesTC(usersCount, pageSize) as any)
    }
}

export const followTC = (id: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(toggleIsFetchingAC(true))
        dispatch(toggleUserFollowAC(id, true))
        await followAPI(id)
        dispatch(toggleIsFetchingAC(false))
    }
}

export const unFollowTC = (id: number) => {
    return async (dispatch: Dispatch) => {
        const result = await unFollowAPI(id)
        console.log(result)
    }
}

export default usersReducer;