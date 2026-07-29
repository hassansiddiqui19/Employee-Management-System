import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className="h-full w-[300px] shrink-0 rounded-2xl bg-white/60 backdrop-blur-xl border border-gray-200 shadow-xl p-5">

  <div className="flex items-center justify-between">
    <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-semibold tracking-wide text-white">
       {data.category}
    </span>

    <span className="text-xs font-medium text-gray-500">
       {data.taskDate}
    
    </span>
  </div>

  <h2 className="mt-5 text-2xl font-bold tracking-tight text-gray-800 leading-tight">
     {data.taskTitle}
  </h2>

  <p className="mt-3 text-sm leading-6 text-gray-600">
     {data.taskDescription}
  </p>
<div className='mt-4'>
    <button className=' w-[90%] bg-gradient-to-l from-cyan-300 to-blue-400 rounded-full  px-2  py-2 text-xs font-semibold  text-white absolute bottom-3 left-4'>AcceptTask</button>
</div>
</div>
)
}

export default NewTask
