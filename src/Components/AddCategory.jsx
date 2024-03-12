import { useState } from "react"



const AddCategory = ({onNewCategory}) => {
 
  
  const [inputValue, setinputValue] = useState('');
  
  const onSubmitForm = (eventForm) =>{
    eventForm.preventDefault();
    
    if(inputValue.trim().length <=1) return;
    //setCates(categories => [...categories, inputValue]);
    onNewCategory(inputValue.trim())
    setinputValue('');
  }

  const onInputChange= ({target}) =>{
    setinputValue(target.value);
  }

 

  return (
    <form onSubmit={onSubmitForm}>
      <input type="text" placeholder="Agrega Categoria" value={inputValue} onChange={onInputChange}/>  
    </form>
  )
}

export default AddCategory