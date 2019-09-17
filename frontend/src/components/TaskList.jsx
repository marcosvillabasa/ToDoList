import React, { Component } from 'react';
// import axios from 'axios';

import Task from './Task';

class TaskList extends Component {

    render() {
        return ( 
            <div>
                
                <div className="">
                    {
                        this.props.tasks.map(task => 
                            <div className="">

                                <Task 
                                key={task.id}
                                id= {task._id}
                                name={task.name}
                                description = {task.description}  
                                state={task.state}
                                onDelete={this.props.onDelete}
                                onUpdate={this.props.onUpdate}
                                task={task}
                            />    
                            </div>
                                                        
                        )
                    }
                </div>
            </div>
         );
    }
}
 
export default TaskList;