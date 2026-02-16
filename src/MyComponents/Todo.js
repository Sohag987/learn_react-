import React from 'react'

const Todo = (props) => {
    return (
        <div>
            <h3>{props.todo.sl}</h3>
            <h3>{props.todo.task_name}</h3>
            <h5>{props.todo.desc}</h5>
            <button className="btn btn-sm btn-danger" onClick={()=>{props.onDelete(props.todo)}}>Delete</button>

        </div>
    )
}

export default Todo