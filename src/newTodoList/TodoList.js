import React,{Component} from 'react';
import { Input,Button,List } from 'antd';
import store from './store'
import 'antd/dist/antd.css'; 

class TodoList extends Component{

  constructor(props){
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    store.subscribe(this.handleStoreChange) //组件订阅stroe，
  }

  render(){
    return (
      <div style={{margin:'10px 0 0 10px'}}>
        <div>
          <Input 
          value={this.state.inputValue} 
          placeholder="todo info" 
          onChange={this.handleInputChange}
          style={{width:'300px',marginRight:'10px'}}/>
          <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
        </div>
        <List
          style={{marginTop:'10px',width:'300px'}}
          bordered
          dataSource={this.state.list}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </div>
    )
  }

  handleInputChange(e){
    const action = {
      type:'change_input_value',
      value:e.target.value
    }
    store.dispatch(action)
  }
  handleStoreChange(){
    this.setState(store.getState())
  }
  handleBtnClick(){
    const action = {
      type:'add_todo_item'
    }
    store.dispatch(action)
  }
}

export default TodoList;