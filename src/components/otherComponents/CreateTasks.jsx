import React from 'react'
import { useContext,useState } from 'react'
import { AuthContext } from "../context/AuthProvider";
const CreateTasks = () => {

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
 
  const [newTask, setNewTask] = useState({})
const {userData, setUserData} = useContext(AuthContext);
const task = {
  taskTitle,
  description: taskDescription,
  date: taskDate,
  category,
  assignTo,
  active: true,
  newTask: true,
  completed: false,
  failed: false,
};const submitHandler = (e)=>{
e.preventDefault()

 setNewTask(task)
 const data = JSON.parse(localStorage.getItem('employees'))
data.forEach(function (elem) {
  if(assignTo == elem.firstName){
    
    elem.tasks.push(task)
    elem.taskNumbers.newTask+=1;
    elem.taskNumbers.active+=1;
   console.log(elem.tasks)
   
  }
})

localStorage.setItem('employees',JSON.stringify(data))

setUserData({
  ...userData,
  employees:data,
});

setTaskDate("");
setAssignTo("");
setTaskDescription("");
setTaskTitle("");
  setCategory("");  
}
  return (
    
<div className="w-full flex justify-center items-center p-10">
  <form className="w-full max-w-5xl bg-white/60 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-2xl p-8 flex gap-10"
  onSubmit={(e)=>{submitHandler(e)}}>

    <div className="w-1/2 flex flex-col gap-5">

      <div>
        <h2 className="text-sm font-semibold text-gray-700 mb-2">
          Task Title
        </h2>
        <input
        value={taskTitle}
        onChange={(e)=>{
          setTaskTitle(e.target.value)
        }}
          type="text"
          placeholder="Make a UI Design"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition"
        />
      </div>

      <div>
        <h2 className="text-sm font-semibold text-gray-700 mb-2">
          Date
        </h2>
        <input
           value={taskDate}
        onChange={(e)=>{
          setTaskDate(e.target.value)
        }}
     
          type="date"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition"
        />
      </div>

      <div>
        <h2 
        className="text-sm font-semibold text-gray-700 mb-2">
          Assign To
        </h2>
        <input
           value={assignTo}
        onChange={(e)=>{
          setAssignTo(e.target.value)
        }}
     
        type="text"
          placeholder="Employee Name"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition"
        />
      </div>

      <div>
        <h2 className="text-sm font-semibold text-gray-700 mb-2">
          Category
        </h2>
        <input
           value={category}
        onChange={(e)=>{
          setCategory(e.target.value)
        }}
     
          type="text"
          placeholder="Design, Development..."
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition"
        />
      </div>

    </div>

    
    <div className="w-1/2 flex flex-col">

      <h2 className="text-sm font-semibold text-gray-700 mb-2">
        Description
      </h2>

      <textarea
           value={taskDescription}
        onChange={(e)=>{
          setTaskDescription(e.target.value)
        }}
     
        rows="10"
        placeholder="Write task description..."
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none resize-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition"
      ></textarea>

      <button
        type="submit"
        className="mt-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold text-white shadow-lg hover:scale-[1.02] hover:shadow-xl transition duration-300"
      >
        Create Task
      </button>

    </div>

  </form>
</div>  )
}

export default CreateTasks
