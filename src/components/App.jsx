import { useState } from 'react'
import '../assets/css/login.css'
import logo from '../assets/img/img-01.webp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="content-login">
        <div className="login">
          <div className="img">
            <img src={logo} alt="" />
          </div>
          <div className="form">
            <div className="titulo">
              <h1>Login</h1>
            </div>
            <input type="text" placeholder='Usuario' />
            <input type="password" placeholder='Password'/>
            <button className='btn btn-color'>Enviar</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
