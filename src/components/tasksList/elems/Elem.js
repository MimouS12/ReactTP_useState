import React , { useState }  from 'react';
import propTypes from 'prop-types'
import './Elem.css';
function Elem({id,title,duration,details,children,deleteTask,updateTask}){

    const [updateMode,setUpdateMode]=useState(false)   
    const [titleToUpdate , setTitleToUpdate]=useState(title)
    const[durationToUpdate, setDurationToUpdate]=useState(duration)
    const[typeToUpdate, setTypeToUpdate]=useState(details.type)
    const[dateToUpdate, setDateToUpdate]=useState(details.date)
    const[descriptionToUpdate, setDescriptionToUpdate]=useState(children)
    
    const handleUpdateTask =()=>{
        details.type=typeToUpdate
        details.date=dateToUpdate
        updateTask(id,titleToUpdate,durationToUpdate,details,descriptionToUpdate)
        setUpdateMode(false)

    }

    return(
      
        <div className="form-elem">
           {!updateMode ? (
            <>
               <div >{title} ( {duration} m) </div> 
         
               {details && 
               
                     <div>{details.type} - {details.date}</div>  
               
               }
               
               <div>{children}</div>
               <div>  
                   <button className="button update" onClick={()=> setUpdateMode(true)}> Update </button>
                   <button className="button delete" onClick={() => deleteTask(id)} > Delete </button>
                      
               </div>  
            </>
        ) : (
            <div>
            <input
              type="text"
              name="title"
              value={titleToUpdate}
              onChange={e => setTitleToUpdate(e.target.value)}
            />
            <input
              type="number"
              value={durationToUpdate}
              name="duration"
              onChange={e => setDurationToUpdate(e.target.value)}
            />
             <input
              type="text"
              value={typeToUpdate}
              name="type"
              onChange={e => setTypeToUpdate(e.target.value)}
            />
            <input
              type="date"
              value={dateToUpdate}
              name="date"
              onChange={e => setDateToUpdate(e.target.value)}
            />
            <input
              type="text"
              value={descriptionToUpdate}
              name="description"
              onChange={e => setDescriptionToUpdate(e.target.value)}
            />
            <button className="button update" onClick={handleUpdateTask}>
              Update a task
            </button>
          </div>

           )}
        </div>

       
    )
}
Elem.propTypes={
    title :propTypes.string.isRequired,
    duration :propTypes.number ,
    details : propTypes.object.isRequired,
   
}
export default Elem ;

