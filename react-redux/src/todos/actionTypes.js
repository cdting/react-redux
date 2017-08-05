//定义action类型，包括增加、反转、删除
//也就时定义我action需要做的事情，比如删除，修改，添加等等
//需要action做的事情，就定义在action.js文件中，需要的action类型就引用这个文件

export const ADD_TODO = 'TODO/ADD';
export const TOGGLE_TODO = 'TODO/TOGGLE';
export const REMOVE_TODO = 'TODO/REMOVE';