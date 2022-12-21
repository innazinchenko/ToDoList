import { Component } from "react";

export class ToDoList extends Component{
    state = {
        input: "",
        todolist: []
    }

onChangeEvent(e) {
    this.setState({userInput:e})
}

addItem(input) {
    if (input===""){
        alert ("Please, enter anything!")
    } else {
    let ToDoListArray = this.state.todolist
    ToDoListArray.push(input);
    this.setState ({todolist: ToDoListArray, userInput: ""})
    }
}

deleteItem(){
let ToDoListArray = this.state.todolist
ToDoListArray=[];
this.setState({todolist:ToDoListArray})
}

crossedWord(event) {
    const LiElement = event.target;
    LiElement.classList.toggle ('crossed');
}

onFormSubmit(e) {
    e.preventDefault();
}

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
             <div className="bigcontainer">
                <input  type="text"
                placeholder="What you want to do?" 
                onChange={(e)=>{this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
             </div>

             <div className="bigcontainer">
               <button onClick={()=>this.addItem(this.state.userInput)} className="btn add">Add!</button>
             </div>

             <ul>
                {this.state.todolist.map((item, index)=>(<li onClick={this.crossedWord} key = {index}>{item}</li>))}
             </ul>

             <div className="bigcontainer">
                <button onClick={()=> this.deleteItem()} className="btn delete">Delete!</button>
             </div>
             </form>
            </div>
        )
    }
}