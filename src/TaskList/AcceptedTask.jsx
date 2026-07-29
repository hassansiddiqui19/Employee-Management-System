import React from 'react'
const AcceptedTask = ({data}) => {
  console.log(data.taskTitle)
  return (
    <div>
      <div className="h-full w-[300px] shrink-0 rounded-2xl bg-white/60 backdrop-blur-xl border border-gray-200 shadow-xl p-5">

  <div className="flex items-center justify-between">
    <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-semibold tracking-wide text-white">
      

    {data.category}
    </span>

    <span className="text-xs font-medium text-gray-500">
      {data.date}
    </span>
  </div>

  <h2 className="mt-5 text-2xl font-bold tracking-tight text-gray-800 leading-tight">
    {data.taskTitle}
  </h2>

  <p className="mt-3 text-sm leading-6 text-gray-600">
    {data.description}</p>
<div className=' fixed bottom-2  '>
  
<button className=' rounded-full bg-gradient-to-l from-cyan-300 to-blue-400 px-3 ml-0 py-1 text-xs font-semibold  text-white'>Completed</button>
  <button className='rounded-full bg-red-600 px-3 ml-30 py-1 text-xs font-semibold  text-white'>Failed</button>
  
    
  </div>

</div>
    </div>
  )
}

export default AcceptedTask
