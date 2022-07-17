import {AppStateType} from '../store';

export const getNewPostTextSL = (state: AppStateType) => {
    return state.profile['newPostText']
}

// Получим поисковую строку
export const getPostBoxSL = (state: AppStateType) => {
    return state.profile['postBox']
}

export const getUserProfileSL = (state: AppStateType) => {
    return state.profile['userProfile']
}