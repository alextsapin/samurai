import {getRepositoriesAPI, getLanguageListAPI, getContributorsAPI} from '../../api/api';

// Первичный state
const initialState = {
    postBox: [
        {id: 1, text:"В Китае успешно проверили российские тест-системы на коронавирус."},
        {id: 2, text:"Разработана система борьбы с астеройдами."},
        {id: 3, text:"В Монголии нашли нефть."}
    ],
    post: ''
}

const mainReducer = (state = initialState, action) => {
    switch(action.type) {

        case 'ADD_POST':
        return {...state, post: action.post}

        default:
        return state
    }
}

export default mainReducer;

// Установим языки
const addPostAC = (post) => ({
    type: 'ADD_POST',
    post: post
})


// Установим поисковую строку
export const addPostTC = (string) => {
    return (dispatch) => {
        dispatch(addPostAC(string))
    }
}