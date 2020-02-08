import React, {Component} from 'react'



class ToDoApp extends Component{
    constructor(){
        super()
        this.state={
         value:'',
         item:[],
         complete:true
        }
    }
    toggle=(index)=>{
    //    console.log(index)
        this.setState({ 
              item:this.state.item.map((el,i) =>{if(i===index) {el.complete= !el.complete} return el}) 
        })   
    }
   onChange=(event)=>{
       this.setState({
           value:event.target.value
       })
   }
   addToDo=(event)=>{
       event.preventDefault()
       if (this.state.value!== '') {
       this.setState({
           value:'',
           item:[{task:this.state.value, complete: false}, ...this.state.item]   
       })}
   }
    renderToDo=()=>{
       return this.state.item.map((todo, index)=>{
           return(
               
               <div className='ligItem' key={index}>
                   <button className="completed" onClick= {()=>this.toggle(index)}>{todo.complete? 'undo' :'complete'}</button>
                  
                   <button className='delete' onClick={(event)=>this.delateToDo(event,index)}> delete </button> 
                    <span onChange={(index)=>this.toggle(index)} style={{textDecoration: todo.complete? 'line-through':'inherit' }}>{todo.task}</span>
               </div>
           )
       })
   }
   delateToDo=(event,i)=>{
       event.preventDefault()
       const array=[...this.state.item]
       array.splice(i, 1)
       this.setState({item:array})


   }
    render(){
        return(
            <div>
                
                <form className='form' onSubmit={this.addItem}>
                 <div className="text">
                    <h1>TO-DO APP!</h1>
                    <p>Add new To-Do</p>
                 </div>
                     <input type="text" className="champText" value={this.state.value} onChange={(event)=>this.onChange(event)}></input> <br/>
                     <button type="submit" className="add" onClick={(event)=>this.addToDo(event)}>Add</button>

                  </form>
                   <p className='textdone' >Let's get some work done!</p>
                   <hr/>
                  
                      {this.renderToDo()}
                      
                    
          </div>  
        )
    }
}

export default ToDoApp 
  