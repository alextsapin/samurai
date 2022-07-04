import {AppStateType} from '../store';

export const getNewPostTextSL = (state: any) => {
    return state.profile.newPostText;
}

// Получим поисковую строку
export const getPostBoxSL = (state: any) => {
    return state.profile.postBox;
}

export const getUserProfileSL = (state: AppStateType) => {
    return state.profile.userProfile;
}