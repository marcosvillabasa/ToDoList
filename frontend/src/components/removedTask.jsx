import React from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faRedo } from '@fortawesome/free-solid-svg-icons'

class RemovedTask extends React.Component {
    state = {
        tasks: []
      }
    async componentDidMount() {
        this.getTasks()
    }
    getTasks = async() => {
        const res = await axios.get('http://localhost:4000/api/tasks/deleted')
        this.setState({
            tasks: res.data
        });
    }
    changeStateTask = async(id) => {
        await axios.put(`http://localhost:4000/api/tasks/${id}`)
        this.getTasks()
        
      }

    getRow = (task) => {
        return(
            <tr key={task._id}>
				<td >{ task.name }</td>
				<td >{ task.description }</td>
                <td ><button className='btn btn-outline-danger btn-sm'
                            onClick={() => {this.changeStateTask(task._id)}}
                            >{<FontAwesomeIcon icon={faRedo}/>}</button></td>
			</tr>
        )
    }
    render() { 
        return ( 
            <React.Fragment>
                <h4 className='mb-3'>Tareas Eliminadas</h4>
                <div className="dropdown-divider mb-2"></div>
                <table className='table'>
                    <thead className="thead-dark">
                        <tr>
                            <th >Nombre</th>
                            <th >Descripción de la tarea</th>
                            <th >Reestablecer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.tasks.map(task => {
                                return this.getRow(task)
                            })
                        }
                    </tbody>
                </table>
            </React.Fragment>
         );
    }
}
 
export default RemovedTask;