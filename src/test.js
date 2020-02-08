// import React from 'react'


// constructor(props){
//     super(props)
//     this.state = { 
//         newTodo:'',
//         todos:[],
//     } 

//     }
//     removeTodo=(index)=>{
//         const todos=[...this.state.todos];
//         todos.splice(index,1)
//         this.setState({todos});
//     }

//     toggletododone=(index)=>{
//         this.setState({
//             todos: this.state.todos.map((el,i)=>{if(index===i) {el.done=!el.done} return el})
//         })
//     }



//     newtodoChanged=(event)=>{
     
//      this.setState({
//         newTodo: event.target.value
//     })
//     }


//     formSubmitted=(event)=>{
//         event.preventDefault();
       
//         if (this.state.newTodo!== '') {
//         this.setState(
//             {
//             newTodo:'',
//             todos: [{title:this.state.newTodo,done:false},...this.state.todos]
//         })}
    
//     }


//             render() { 
//                 return ( 
//                     <div className='Todo'>
//                         <form onSubmit={(event)=>this.formSubmitted(event)}>
//                         <h1>TO-Do-App</h1>       
//                         <p>Add new To-do</p>
//                         <input onChange={(event)=>this.newtodoChanged(event)} className='todoitem' value={this.state.newTodo}></input>
//                         <button  type='submit' >Add</button>
//                         </form>
//                         <p className='workdone'>Let's Get some work done</p>
//                         <ul>
//                             {this.state.todos.map((todo,index)=>{return (
//                             <div key={index} className='todolist'>
//                             <button  onClick={()=>this.removeTodo(index)}>Remove</button>
//                             <li>
//                                   <button className='donebutton' onClick={()=>this.toggletododone(index)} >{(todo.done)? 'undo':'todo' }</button>
//                                  <span className='todo' onChange={()=>this.toggletododone(index)} style={{textDecoration: todo.done? 'line-through':'inherit' }}>{todo.title}</span>
//                             </li> 
//                             </div>
//                             )})
//                              }
//                         </ul>
//                     </div>
//                 );
//             }
//         }
        