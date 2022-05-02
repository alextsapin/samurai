import {Dispatch} from 'redux';
import {v1} from 'uuid';

const initialState = {
    postBox: [
        {id: v1(), text: "В Китае успешно проверили российские тест-системы на коронавирус."},
        {id: v1(), text: "Разработана система борьбы с астеройдами."},
        {id: v1(), text: "В Монголии нашли нефть."}
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action: any) => {
    switch(action.type) {

        case 'UPDATE_POST':
        return {
            ...state, newPostText: action.post
        }

        case 'ADD_POST':
        const newPost = {
            id: v1(),
            text: state.newPostText
        }

        return {
            ...state, postBox: [...state.postBox, newPost]
        }

        default:
        return state
    }
}

const addPostAC = () => ({
    type: 'ADD_POST'
})

const updatePostAC = (post: string) => ({
    type: 'UPDATE_POST',
    post: post
})

export const addPostTC = () => {
    return (dispatch: Dispatch) => {
        dispatch(addPostAC())
    }
}

export const updatePostTC = (post: string) => {
    return (dispatch: Dispatch) => {
        dispatch(updatePostAC(post))
    }
}

export default profileReducer;