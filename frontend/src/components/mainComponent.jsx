import React, { Component } from 'react';
import axios from 'axios'
import TaskList from './TaskList'

class MainComponent extends Component {
    state = {
        tasks: []
      }
    async componentDidMount() {
        this.getTasks()
    }
    getTasks = async() => {
        const res = await axios.get('http://localhost:4000/api/tasks')
        this.setState({
            tasks: res.data
        });
    }
    deleteTask = async(id) => {
        await axios.delete(`http://localhost:4000/api/tasks/${id}`)
        this.getTasks()
    }
    
    changeStateTask = async(id) => {
      await axios.put(`http://localhost:4000/api/tasks/${id}`)
      this.getTasks()
    }


    render() { 
        return ( 
            <div className="container">
            
            <div className="row">
              <div className="col-md-4">
                 <p className="p-2 mb-2 bg-info text-white text-center">
                   TO DO
                 </p>
                 <TaskList
                   tasks={this.state.tasks.filter(task => task.state === 'TO DO')}
                   id={this.state.tasks._id}
                   
                   onDelete= {this.deleteTask}
                   onUpdate= {this.changeStateTask}
                 />
              </div>
              <div className="col-md-4">
                 <p className="p-2 mb-2 bg-warning text-white text-center">
                   IN PROGRESS
                 </p>
                 <TaskList
                   tasks={this.state.tasks.filter(task => task.state === 'IN PROGRESS')}
                   id={this.state.tasks._id}
                   
                   onDelete= {this.deleteTask}
                   onUpdate={this.changeStateTask}
                 />
              </div>
              <div className="col-md-4">
                 <p className="p-2 mb-2 bg-success text-white text-center">
                       DONE
                 </p>
                 <TaskList
                   tasks={this.state.tasks.filter(task => task.state === 'DONE')}
                   id={this.state.tasks._id}
                   
                   onDelete= {this.deleteTask}
                   onUpdate={this.changeStateTask}
                   />
              </div>
            </div>
          </div>
         );
    }
}
 
export default MainComponent;