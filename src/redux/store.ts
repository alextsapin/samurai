// Redux
import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

// Reducers
import profileReducer from './reducers/profile';
import usersReducer from './reducers/users';
import chatReducer from './reducers/chat';
import authReducer from './reducers/auth';

// Объединим редьюсеры
const rootReducer = combineReducers({
    profile: profileReducer,
    users: usersReducer,
    chat: chatReducer,
    auth: authReducer
});

type rootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<rootReducerType>;

// Создадим store c помощью redux
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;