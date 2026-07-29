import React from 'react'

const FailedTask = ({data}) => {
  return (
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
   {data.description}
  </p>
<div className='mt-2'>
    <button className=' w-full bg-gradient-to-l from-red-500 to-red-600 rounded-full  px-3  py-2 text-xs font-semibold  text-white absolute bottom-3 left-4'>FailedTask</button>
</div>
</div>
  )
}

export default FailedTask
