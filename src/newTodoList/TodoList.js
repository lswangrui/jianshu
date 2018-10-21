import React,{Component} from 'react';

import store from './store'
// import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './store/actionTypes'
import { getInputChangeAction,getItemAction,getDeleteItemAction,initListAction} from './store/actionCreators';
import 'antd/dist/antd.css'; 
import TodoListUI from './TodoListUI'
import axios from 'axios';

class TodoList extends Component{

  constructor(props){
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    store.subscribe(this.handleStoreChange) //组件订阅stroe，
  }

  render(){
    return <TodoListUI 
    inputValue={this.state.inputValue}
    list={this.state.list}
    handleInputChange={this.handleInputChange}
    handleBtnClick={this.handleBtnClick}
    handleItemDelete={this.handleItemDelete}
    />
  }

  componentDidMount(){
    axios.get('/list').then(({data})=>{
      const action = initListAction(data)
      store.dispatch(action)
    })
  }

  handleInputChange(e){
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleStoreChange(){
    this.setState(store.getState())
  }
  handleBtnClick(){
    const action = getItemAction()
    store.dispatch(action)
  }
  handleItemDelete(index){
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList;