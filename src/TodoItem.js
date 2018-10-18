import React,{Component} from 'react'

class TodoItem extends Component{

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
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

export default TodoItem