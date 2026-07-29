import React from 'react'
import Header from '../components/otherComponents/HeaderEmployee'
import CreateTasks from '../components/otherComponents/CreateTasks'
import AllTasks from '../components/otherComponents/AllTasks'

const AdminDashboard = () => {
  return (
    <div className='bg-gradient-to-l from-cyan-50 to-blue-100 h-screen w-full'>
        <Header />   
    <CreateTasks/>
    <AllTasks/>
    </div>
  )
}

export default AdminDashboard
