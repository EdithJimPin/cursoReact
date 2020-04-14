import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
//Datos que están "almacenados"
import {todos} from './todos.json';
//Otros componentes
import TodoForm from './components/TodoForm';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this); //para que no pierda el scope
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  removeTodo(index){ //que reciba el indice de la tarea a eliminar
    if(window.confirm("¿Está seguro de eliminar la tarea?")){
      this.setState({
        todos: this.state.todos.filter((e,i)=>{
          return i !== index  //recorre uno a uno hasta cumplir con la condición
        })// vamos a retornar todos los datos excepto si el índice es diferente, no agrega el elemnto al nuevo arreglo
      }) // va a restonar todos los que son diferente al índice.
    }
  }


  render(){
    const todos = this.state.todos.map((todo, i) => {
      return (            //Retornamos una nueva vista
        <div className="col-md-4" key={i}> 
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.Title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
                <p>{todo.description}</p>
                <p><mark>{todo.responsible}</mark></p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.removeTodo.bind(this, i)}> 
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )  
    })
    //Return del componente
    return (
      <div className="App">

        <nav className="navbar navbar-dark  bg-dark">
          <a href="" className="text-white">
            Tasks
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>
            <div className="col-md-8">
              <div className="row">                
                { todos }
              </div>
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default App;
