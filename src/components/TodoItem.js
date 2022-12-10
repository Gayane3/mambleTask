import { useState } from "react";
//import Dialog from "./Dialog";

function TodoItem({todo, onDelete, onChange}){
    // const [dialog, setDialog] = useState({
    //     message:"",
    //     isLoading:false
    // })



   
    return(
        <>
        <div className="todoItem">
            <label>
                <input type="checkbox" className="check"  checked={todo.isCompleted} onChange={(e)=>{
                    onChange({
                        ...todo,
                        isCompleted:e.target.checked, 
                    })
                }}
                />
                {todo.text}
                <button onClick={()=>
                    onDelete(todo)}
                     className="xBtn">X</button>
            </label>
        </div>
     {/* { dialog.isLoading && <Dialog message={dialog.message}/>}  */}
        </>
    )
}

export default TodoItem;