import React,{Component} from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component{

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  //一个组件要从父组件接受参数
  //如果这个组件第一次存在于父组件中，不会执行
  //如果这个组件之前已经存在于父组件中，才会执行


  shouldComponentUpdate(nextProps,nextState){
    if(nextProps.content !== this.props.content){
      return true
    }else{
      return false
    }
  }
  render(){
    const {content} = this.props
    return (
      <div onClick={this.handleClick}>{content}</div>
    )
  }

  handleClick(){
    const {itemDelete,index} = this.props
    itemDelete(index)
    // this.props.itemDelete(this.props.index)
  }
}

TodoItem.propTypes = { //设置传值属性类型以及是否必填
  // content:PropTypes.string,
  content:PropTypes.oneOfType([PropTypes.string,PropTypes.number]), //可以是数字或者字符串
  itemDelete:PropTypes.func,
  index:PropTypes.number
}


export default TodoItem