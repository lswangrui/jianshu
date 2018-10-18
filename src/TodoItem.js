import React,{Component} from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component{

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  render(){
    const {content,test} = this.props
    return (
      <div onClick={this.handleClick}>{test}-{content}</div>
    )
  }

  handleClick(){
    const {itemDelete,index} = this.props
    itemDelete(index)
    // this.props.itemDelete(this.props.index)
  }
}

TodoItem.propTypes = { //设置传值属性类型以及是否必填
  test:PropTypes.string.isRequired,
  // content:PropTypes.string,
  content:PropTypes.oneOfType([PropTypes.string,PropTypes.number]), //可以是数字或者字符串
  itemDelete:PropTypes.func,
  index:PropTypes.number
}

TodoItem.defaultProps = { //未传值的默认值
  test:'hello world'

}

export default TodoItem