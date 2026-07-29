import React from 'react'

const TasklistNumbers = ({data}) => {
   
  const employee= data;

  if(!employee){
return <h2>Loading...</h2>
  }
  console.log("Tln",employee)
  return (

    
    <div className=' flex justify-between gap-5 screen m-5'>
      <div className='h-40 w-[45%] bg-gradient-to-l from-cyan-600 to-blue-600 rounded-2xl'>
        <h2 className='text-3xl font-semibold pl-5 pt-4  text-blue-50'>{employee.taskNumbers.active}</h2>
        <h3 className='text-xl font-medium p-4  text-blue-50'>ActiveTasks</h3>
        </div>

        <div className='h-40 w-[45%] bg-gradient-to-l from-cyan-600 to-blue-600 rounded-2xl'>
        <h2 className='text-3xl font-semibold pl-5 pt-4 text-white'>{employee.taskNumbers.newTask}</h2>
        <h3 className='text-xl font-medium p-4 text-white'>NewTask</h3>
        </div>

        <div className='h-40 w-[45%] bg-gradient-to-l from-cyan-600 to-blue-600 rounded-2xl'>
        <h2 className='text-3xl font-semibold pl-5 pt-4 text-blue-50'>{employee.taskNumbers.completed}</h2>
        <h3 className='text-xl font-medium p-4 text-blue-50'>TaskCompleted</h3>
        </div>


        <div className='h-40 w-[45%] bg-gradient-to-l from-cyan-600 to-blue-600 rounded-2xl'>
        <h2 className='text-3xl font-semibold pl-5 pt-4 text-blue-50'>{employee.taskNumbers.failed}</h2>
        <h3 className='text-xl font-medium p-4 text-blue-50'>TaskFailed</h3>
        </div>

    </div>
  )
}

export default TasklistNumbers
