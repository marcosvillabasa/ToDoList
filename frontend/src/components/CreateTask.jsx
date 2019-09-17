import React, { Component } from 'react';
import axios from 'axios';
import RemovedTask from './removedTask'

class CreateTask extends Component {
    state = { 
        tasks: [],
        name: '',
        content: ''
     }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/api/tasks');
        this.setState({
            tasks: res.data
        });
    }

    inputChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const newTask = {
            name: this.state.name,
            description: this.state.content,
            state: 'TO DO',
        }
        if (!newTask.name || !newTask.description) {
            return
        }
        await axios.post('http://localhost:4000/api/tasks',newTask);
        console.log(newTask);
        window.location.href='/'
    }

    render() { 
        return ( 
            <React.Fragment>
                <div className="row">
                        <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Nueva Tarea</h5>
                                
                                    <div className="form-group">
                                        <input 
                                            type="text"
                                            className="form-control"
                                            placeholder="Nombre"
                                            name="name"
                                            onChange={this.inputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <textarea 
                                            name="content"
                                            className="form-control"
                                            placeholder="Descripción"
                                            onChange={this.inputChange}
                                            required
                                        />
                                    </div>
                                    <form onSubmit={this.onSubmit}>
                                        <button 
                                            type="submit" 
                                            className="btn btn-primary d-block mt-3" 
                                            onSubmit={this.onSubmit}
                                        >Crear</button>
                                    </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            <div className="dropdown-divider"></div>
            <div className="row">
                <RemovedTask/>
            </div>
           </React.Fragment>
            
         );
    }
}
 
export default CreateTask;