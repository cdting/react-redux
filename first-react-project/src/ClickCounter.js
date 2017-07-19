//引入react中的Compoment
import React,{Component} from 'react';


//定义一个ClickCounter类并继承Compoment
class ClickCounter extends Component{

    //构造函数
    constructor(props){
        //继承父类构造函数
        super(props);
        this.onClickButton = this.onClickButton.bind(this);
        this.state = {count: 0};
    }

    //定义一个方法
    onClickButton(){
        this.setState({count: this.state.count + 1});
    }

    //向元素添加元素
    render(){
        //使用对象键值对定义一个样式
        const counterStyle = {
            margin: '16px'
        }

        return(
            //使用style={},写入对象名称
            <div style={counterStyle}>
                <button onClick = {this.onClickButton} >Click ME</button>
                <div>
                Click Count: {this.state.count}
                </div>
            </div> 
        );
    }
}

//导出类函数
export default ClickCounter;