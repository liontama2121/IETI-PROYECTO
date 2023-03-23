import { useState } from 'react'
import './App.css'
import Loginformik from './pages/auth/LoginFormik'
import RegisterPage from './pages/auth/RegisterPage'
import LoginGooglePage from './pages/auth/LoginGooglePage'
import Home from './pages/home/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Loginformik></Loginformik> */}
      <RegisterPage></RegisterPage>
      <LoginGooglePage></LoginGooglePage>
      {/* <Home></Home> */}
    </div>
    
  )
}

export default App
