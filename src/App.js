import React,{Component,Fragment} from 'react';
import { CSSTransition,TransitionGroup } from 'react-transition-group';
import './style.css'

export default class extends Component{

  constructor(props){
    super(props)
    this.state={
      show:true,
      list:[]
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
  }

  render(){
    return (
      <Fragment>
      {/*<CSSTransition
        in={this.state.show}
        timeout={1000}
        classNames = 'fade'
        unmountOnExit
        onEntered={(el)=>{el.style.color='blue'}}
        appear={true}
      >
        <div>hello</div>
      </CSSTransition>*/}
      <TransitionGroup>
      {
        this.state.list.map((item,index)=>{
          return (
            <CSSTransition
              in={this.state.show}
              timeout={1000}
              classNames = 'fade'
              unmountOnExit
              key={index}
              onEntered={(el)=>{el.style.color='blue'}}
              appear={true}
            >
              <div>{item}</div>
            </CSSTransition>
            
          )
        })
      }
      </TransitionGroup>
        <button onClick={this.handleAddItem}>toggle</button>
      </Fragment>
      
    )
  }
  handleToggle(){
    this.setState({
      show:!this.state.show
    })
  }

  handleAddItem(){
    this.setState((prevState)=>{
      return {
        list:[...prevState.list,'item']
      }
    })
  }
}