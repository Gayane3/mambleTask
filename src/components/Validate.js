export  function validate(text){
      const errors = {};
       errors.isValidated = true;


       if(!text){
         errors.text = "Please fill the task";
         errors.isValidated = false;
       }else if(text.length > 54){
                var el = document.querySelector('.inputStyle');

        errors.text = "Task content can contain max 54 characters.";
            el.style.border = "1px solid red";
        errors.isValidated = false;
       }
       return errors;
    }