import React from 'react'
import Banner from './Banner'
import Dashboard from './Dashboard'
import Navbar from './Navbar'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      {/* <Banner/> */}
      <Dashboard/>
    </div>
  )
}

export default App
