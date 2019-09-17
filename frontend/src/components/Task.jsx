import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'

class Task extends React.Component {
    
    render() { 
        return ( 
            <div className="card mt-2">
                <div className="card-header d-flex justify-content-around">
                    <h6>{this.props.name}</h6>
                        
                </div>
                <div className="card-body">
                        <div className="card-text">
                            {this.props.description}
                        </div>
                        <div className="card-text">
                            {this.props.state}
                        </div>
                </div>
                <div className="card-footer d-flex justify-content-end">
                        <button 
                            className="btn btn-outline-secondary btn-sm mr-1" 
                            onClick={()=>{this.props.onUpdate(this.props.id)}}
                        >
                            <FontAwesomeIcon icon={faCheck}/>
                        </button>

                        <button 
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => {this.props.onDelete(this.props.id)}}
                        >
                            <FontAwesomeIcon icon={faTrash}/>
                        </button>
                </div>
            </div>
         );
    }
}
 
export default Task;
