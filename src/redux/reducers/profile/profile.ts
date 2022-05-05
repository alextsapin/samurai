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

type postType = {
    id: string
    text: string
}

const profileReducer = (state = initialState, action: any) => {
    switch(action.type) {

        case 'UPDATE_POST':
        return {
            ...state, newPostText: action.post
        }

        case 'ADD_POST': {
            const newPost = {
                id: v1(),
                text: state.newPostText
            }

            return {
                ...state, postBox: [...state.postBox, newPost]
            }
        }

        case 'DELETE_POST': {
            return {
                ...state, postBox: [...state.postBox.filter((item: postType) => item.id !== action.id)]
            }
        }

        case 'EDIT_POST': {
            return {
                ...state, postBox:  [...state.postBox.map((item: postType) => item.id === action.id ? {...item, text: action.newText}: item)]
            }
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

const deletePostAC = (id: string) => ({
    type: 'DELETE_POST',
    id: id
})

const editPostAC = (id: string, newText: string) => ({
    type: 'EDIT_POST',
    id: id,
    newText: newText
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

export const deletePostTC = (id: string) => {
    return (dispatch: Dispatch) => {
        dispatch(deletePostAC(id))
    }
}

export const editPostTC = (id: string, newText: string) => {
    return (dispatch: Dispatch) => {
        dispatch(editPostAC(id, newText))
    }
}

export default profileReducer;