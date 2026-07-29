import React from 'react'
import Header from '../components/otherComponents/HeaderEmployee'
import Tasklist from '../TaskList/Tasklist'
import TasklistNumbers from '../components/otherComponents/TasklistNumbers'

const EmployeeDashboard = ({data}) => {

     
return (<div className='bg-gradient-to-l from-cyan-50 to-blue-100 pb-10'>
  <h1>{data?.id}</h1>
<Header data={data}/>
<TasklistNumbers data={data}/>
<Tasklist data={data}/>
    </div>
  )
}

export default EmployeeDashboard
