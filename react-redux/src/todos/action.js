//引用actionTypes里面定义的action类型
import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes';

let nextTodoId = 0;


//添加
export const addTodo = (text) =>({
    //action类型
    type: ADD_TODO,
    //是否完成
    completed: false,
    //唯一标识
    id : nextTodoId++,
    //显示的内容
    text: text

});

//反转
export const toggleTodo = (id)=>({
    type: TOGGLE_TODO,
    id: id
});

//删除
export const removeTodo = (id)=>({
    type: REMOVE_TODO,
    id: id
});