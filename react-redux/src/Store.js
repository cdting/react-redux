//每个Store只能接收一个reducer，所以我们需要整合一个reducer
import {createStore, combineReducers} from 'redux';

import {reducer as todoReducer} from './todos';
import {reducer as filterReducer} from './filter';


//使用redux中的combineReducers方法可以合并多个reducer
const reducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer
});

export default createStore(reducer);