// Redux
import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

// Reducers
import mainReducer from './reducers/main';


// Объединим редьюсеры
let rootReducer = combineReducers({
    main: mainReducer
});

// Создадим store c помощью redux
let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;