import React, { useState } from 'react';
//import logo from './logo.svg';
import Form from './components/form/Form'
import TasksList from './components/tasksList/TasksList'

import './App.css';


function App() {
  const steps =["Enter the task title","click on add task"]
  let loading = false
const [tasks , setTasks]=useState([
  {id :"1",
  title:"Learn HTML",
  duration:60, 
  details:{type:"IT",date:"2020-03-06"},
  description :"INMA hello!!!!!!!!!!!!!!"
  },
  {id :"2",
  title:"Learn react",
  duration:120, 
  details:{type:"IT",date:"2020-03-06"},
  description :"INMA only  !!!!!!!!"
  },
  { id :"3",
    title:"Learn node",
    duration:30, 
    details:{type:"IT",date:"2020-03-06"},
    description :"INMA dream !!!!!!!!!"
  }
])
const addTask =(title, duration,details,description)=>{
  setTasks([...tasks,{title,duration,details,description}])
 //tasks.push({title , duration })
}
const deleteTask = (id) => {
  const newTasks=tasks.filter(task=>task.id!==id)
  setTasks(newTasks)
}
const updateTask =(id,title, duration,details,description)=>{
  const newTasks = tasks.map(task => task.id ===id ? ({title,duration,details,description}):task)
  setTasks(newTasks)
}
  
  return (
    <div className="App" >
       {loading && <div>Loading ... </div>}
       {!loading && (
         <div>
        <Form addTask={addTask}/> 
         <TasksList tasks={tasks}
                    deleteTask={deleteTask}
                    updateTask={updateTask}
         />
         </div>
         )}
    </div>
  );
}

export default App;
