// Redux
import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

// Reducers
import profileReducer from './reducers/profile/profile';


// Объединим редьюсеры
let rootReducer = combineReducers({
    profile: profileReducer
});

// Создадим store c помощью redux
let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;