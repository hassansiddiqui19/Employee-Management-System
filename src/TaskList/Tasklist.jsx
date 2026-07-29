import React from 'react'
import AcceptedTask from "./AcceptedTask";
import NewTask from "./NewTask";
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';
// localStorage.clear()
const Tasklist = ({data}) => {
  const employeeData= data;
console.log("Current Employee",employeeData)
  return (
    <div id='tasklist' className='m-5 h-[250px] gap-10 w-full overflow-x-auto flex flex-nowrap mt-10 '> 
{employeeData.tasks.map((elem,index)=>{
  console.log(elem,index)
  if(elem.active){
return <AcceptedTask key={index} data={elem}/>
  }
  
  if(elem.newTask){
return <NewTask key={index} data={elem}/>
  }
  if(elem.completed){
return <CompleteTask key={index} data={elem}/>
  }
  
  if(elem.failed){
return <FailedTask key={index} data={elem}/>
  }
  return null;
})}

</div>

  )
}

export default Tasklist
