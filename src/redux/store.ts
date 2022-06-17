// Redux
import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

// Reducers
import profileReducer from './reducers/profile';
import usersReducer from './reducers/users'


// Объединим редьюсеры
let rootReducer = combineReducers({
    profile: profileReducer,
    users: usersReducer
});

// Создадим store c помощью redux
let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;