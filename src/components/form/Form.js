import React, { useState ,useRef , memo} from 'react';
import './Form.css';
function Form({addTask}){
  
  const [isVisible,setIsVisible]=useState(true)
  const toggleVisibility=()=>{
      setIsVisible(!isVisible)
  }
    const [title,setTitle]=useState("Learn ")
    const [duration , setDuration]=useState(0)
    const [type,setType]=useState("IT ")
    const [date,setDate]=useState()
    const [description,setDescription]=useState("INMA ")
    const inputTitle = useRef(null)
    const inputType = useRef(null)
    const inputDate = useRef(null)
    const inputDescription = useRef(null)
  
    const handleAddTask=()=>{
        addTask(title,duration,{type,date},description)
        //setTitle("")
       // setDuration(0)
      //  inputTitle.current.focus()
    }
     
    return (
     
     <div>
       <button className="button tog" onClick={toggleVisibility}>Ajouter Task (ouvrir formulaire)</button>
       
       <div>
       
    {!isVisible && (
      <>
      <div className="form-body">
      
        <div className="task-elem">
        <label>Titre :</label>
        <input
         type="text"
          name ="title"
          className="nomrech"
          ref={inputTitle}
          value={title}
          onChange={e => setTitle(e.target.value)}
          />   
          </div>
          <div className="task-elem">
          <label>Duration :</label>
        <input type="number" 
               value={duration}
               name="duration"
               className="numrech"
               onChange={e=> setDuration( e.target.value )}
        />
        </div>
        <div className="task-elem">
          <label>Description : </label>
          <input
          type="text"
          name ="description"
          ref={inputDescription}
          value={description}
          onChange={e => setDescription(e.target.value)}
          />   
        </div>     
        <div className="task-elem ">

          <b>Details</b>
          <div className="type-date">
          <label>Type :</label>
          <input
              type="text"
             name ="type"
             
             ref={inputType}
             value={type}
             onChange={e => setType(e.target.value)}
          />   
          </div>
          <div className="type-date">
             <label> Date :</label>

               <input
                   type="date"
                   name ="date"
                   ref={inputDate}
                   
                   onChange={e => setDate(e.target.value)}
                />  
           </div>

        </div>
        

        <button className="button add"  onClick={handleAddTask} >Add a task</button>

        </div>
        
       </> 
    )}
   </div>
  
 </div>


        
        )
}
export default memo(Form) ;