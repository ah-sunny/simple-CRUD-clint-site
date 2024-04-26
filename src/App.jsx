
import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {
 

  return (
    <>
      
      <h1 className='text-5xl font-bold'>Simple CRUD</h1>
     <Link to='/users'>Users</Link>
     <Outlet></Outlet>
    </>
  )
}

export default App
