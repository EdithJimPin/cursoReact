import React, {Component} from 'react';

class TodoForm extends Component{
    constructor () {
        super();
        this.state = {
          Title: '',
          responsible: '',
          description: '',
          priority: 'low'
        };
        this.cambiaEntrada = this.cambiaEntrada.bind(this); 
        this.guardarCambios = this.guardarCambios.bind(this);
      }
       
      cambiaEntrada(e) {   
        const {value, name} = e.target;
        console.log(value, name);
        this.setState({
          [name]: value
        });
      }

      guardarCambios(e) {
        e.preventDefault(); 
        this.props.onAddTodo(this.state);
        this.setState({
          Title: '',
          responsible: '',
          description: '',
          priority: 'low'
        });
      }
    
      render() {
        return (
          <div className="card">
            <form  className="card-body" onSubmit={this.guardarCambios}>
              <div className="form-group">
                <input
                  type="text"
                  name="Title"
                  className="form-control"
                  value={this.state.Title}
                  onChange={this.cambiaEntrada}
                  placeholder="Title"
                  />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="responsible"
                  className="form-control"
                  value={this.state.responsible}
                  onChange={this.cambiaEntrada}
                  placeholder="Responsible"
                  />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="description"
                  className="form-control"
                  value={this.state.description}
                  onChange={this.cambiaEntrada}
                  placeholder="Description"
                  />
              </div>
              <div className="form-group">
                <select
                    name="priority"
                    className="form-control"
                    value={this.state.priority}
                    onChange={this.cambiaEntrada}
                  >
                  <option>low</option>
                  <option>medium</option>
                  <option>high</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                Guardar
              </button>
            </form>
          </div>
        )
      }
    
    }
    
    export default TodoForm;