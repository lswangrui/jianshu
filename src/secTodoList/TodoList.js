import React,{Component} from 'react';
// import store from './store';
import {connect} from 'react-redux';

const TodoList = (props)=>{
  const {inputValue,changeInputValue,handleClick,list,handleDelete} = props
    return (
      <div>
        <div>
          <input value={inputValue} onChange={changeInputValue}/>
          <button onClick={handleClick}>提交</button>
        </div>
        <ul>
          {
            list.map((item,index)=>{
              return <li onClick={()=>{handleDelete(index)}} key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    )
}


// class TodoList extends Component {

//   render () {

//     const {inputValue,changeInputValue,handleClick,list,handleDelete} = this.props

//     return (
//       <div>
//         <div>
//           <input value={inputValue} onChange={changeInputValue}/>
//           <button onClick={handleClick}>提交</button>
//         </div>
//         <ul>
//           {
//             list.map((item,index)=>{
//               return <li onClick={()=>{handleDelete(index)}} key={index}>{item}</li>
//             })
//           }
//         </ul>
//       </div>
//     )
//   }
// }

//连接规则，把store中的数组映射作为组件的props
const mapStateToProps =(state)=>{
  return {
    inputValue:state.inputValue,
    list:state.list
  }
}
//store.dispatch,props,把前者挂载到后者
const mapDispatchToProps = (dispatch)=>{
  return {
    changeInputValue(e){
      const action = {
        type:'change_input_value',
        value:e.target.value
      }
      dispatch(action);
    },
    handleClick(){
      const action = {
        type:'add_item'
      }
      dispatch(action);
    },
    handleDelete(index){
      const action = {
        type:'delete_item',
        index
      }
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
//让todolist和store做连接