import React, {Component,Fragment} from 'react'
import TodoItem  from './TodoItem'
import './style.css'

class TodoList extends Component {

  constructor(props){
    super(props)
    this.state = {
      inputValue:'',
      list:[]
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }
  handleInputChange(e){
    const value = e.target.value
    this.setState(()=>({ //操作时异步的所以要先保存值在设置
      inputValue:value
    }))
    // this.setState({
    //   inputValue:e.target.value
    // })
  }
  handleBtnClick(){
    if(!this.state.inputValue) return
    this.setState((prevState)=>({
      list:[...prevState.list,prevState.inputValue],
      inputValue:''
    }))
    // this.setState({
    //   list:[...this.state.list,this.state.inputValue],
    //   inputValue:''
    // })
  }
  handleItemDelete(index){
    this.setState((prevState)=>{
      const list = [...prevState.list]
      list.splice(index,1)
      return {list}
    })

    //state不允许我们做任何改变
    // const list = [...this.state.list]
    // list.splice(index,1)
    // this.state.list.splice(index,1) //不建议直接修改list数组
    // this.setState({
    //   list:list
    //   // list:this.state.list
    // })
  }

  getTodoItem(){
    return this.state.list.map((item,index)=>{
      return (
        <div key={index}>
          <TodoItem 
          content={item}
          index={index}
          itemDelete={this.handleItemDelete}
          />
        </div>
      )
    })
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor='insertArea'>输入内容</label>
          <input
          id='insertArea'
          className='input'
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          />  
          <input type='button' value='提交'
          onClick={this.handleBtnClick}
          />
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }
}

export default TodoList