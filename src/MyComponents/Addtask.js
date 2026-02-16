import React from 'react'
import { useState } from 'react'

const Addtask = (props) => {

    const [TaskName, setTaskName] = useState("");
    const [Description,setDescription] = useState("");

    const submit = (e)=>{
        e.preventDefault(); 
        if(!TaskName || !Description){
            alert("Task name and tirle Can not be empty!");
        }

        props.addTodo(TaskName,Description); 

    }
    return (
        <div className='container my-3'>
            <h3 className='text-center'>Add Task</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="name" classNameName="form-label">Task Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={TaskName} onChange={(e)=>{setTaskName(e.target.value)}}/>

                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Task Description</label>
                    <input type="text" className="form-control" id="exampleInputPassword1"  value={Description} onChange={(e)=>{setDescription(e.target.value)}}/>
                </div>

                <button type="submit" className="btn btn-sm btn-success">ADD</button>
            </form>

        </div>
    )
}

export default Addtask  
