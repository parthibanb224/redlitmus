import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' Component={Login}></Route>
      </Routes>
    </div>
  )
}

export default App
