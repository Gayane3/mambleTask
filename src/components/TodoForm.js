import { useState, useEffect } from "react";
import {validate} from "./Validate";

function TodoForm({onAdd}){

    const [text, setText] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const[isSubmit, setIsSubmit] = useState(false);
    

    const handleChange = (e)=>{   
   
     setText(e.target.value)
     
     }
     const handleSubmit = (e)=>{
        const el = document.querySelector(".head1");
        const el1 = document.querySelector(".head2");
            e.preventDefault();
            var errors = validate(text);
            setFormErrors(errors);
            if(errors.isValidated === true){           
            onAdd(text);
            setText("")
            el.style.display = "none";
             el1.style.display = "none";
            setIsSubmit(false);
     }
     }
    


    return(
       <>
        <form className="todoForm" >
            
            <label className="label"> 
                Task
                </label>
                
                <input type="text" className="inputStyle" value={text} required disabled={!validate(text)} placeholder="Write here"   onChange={handleChange}/>
                
                <p className="errorText">{formErrors.text}</p>
                <button className="todoButton" onClick={handleSubmit} >Add</button>
                
               
            
        </form>     
        <p className="head1">Your life is a blank page. You write on it.</p>
                <p className="head2">So start by adding your tasks here.</p>
        
        </>
    )
}

export default TodoForm;