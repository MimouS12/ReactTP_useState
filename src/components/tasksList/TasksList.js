import React, { useState } from 'react';
import Elem from './elems/Elem.js';
function TasksList({tasks , deleteTask, updateTask}){
    
    const [isVisible,setIsVisible]=useState(true)
    const toggleVisibility=()=>{
        setIsVisible(!isVisible)
    }
    return(
        <div>
            <button className="button tog" onClick={toggleVisibility}>Toggle visibility </button>
            <div>
             
          {!isVisible && tasks.map(task=>(
              <Elem key ={task.id} id={task.id} title={task.title} duration={task.duration} details={task.details} deleteTask={deleteTask} updateTask={updateTask}>
                  {task.description}  
              </Elem>
             ))}  
        </div>
        </div>
    )
}
export default TasksList ;
/*<Elem title={props.tab[0]} duration={props.tab[1]} type={props.tab[2].type} date={props.tab[2].date}Sayhello={Sayhello}  />
       <Elem   title={props.tab[0]} duration={props.tab[1]} type={props.tab[2].type} date={props.tab[2].date} Sayhello={Sayhello}/>
        <Elem title={props.tab[0]} duration={props.tab[1]} type={props.tab[2].type} date={props.tab[2].date} Sayhello={Sayhello}/> */