import { useState } from 'react'
import '../assets/css/login.css'
import logo from '../assets/img/img-01.webp'
import Swal from 'sweetalert2';
import { useFormik } from 'formik';
import { validateLoginFrontend } from '../schemas/dto.login.js';
import { useNavigate } from 'react-router-dom';

function App() {
  
  let navigate = useNavigate();
    const [LoggedIn, setLoggedIn] = useState(false);
    
    const formik = useFormik({
        initialValues: {
            user: '',
            password: ''
        },
        validationSchema: validateLoginFrontend,
        onSubmit: async (values) => {
            try {
                let request = await (await fetch(`http://${import.meta.env.VITE_MY_SERVER}:${import.meta.env.VITE_PORT}/validateUsuario`, {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })).json();
                console.log(request);
                if(request.status >= 400) {
                     Swal.fire({
                        title: "Ops!",
                        icon: "error",
                        text: request.message
                    })
                    return setLoggedIn(false)
                }else if (request.message === "Usuario/Contraseña incorrecto"){
                  Swal.fire({
                    title: "Ops!",
                    icon: "error",
                    text: "Usuario/Contraseña incorrecto"
                })
                }else {
                    console.log(request);
                    let headers = request.headers; 
                    let token = headers["X-Authorization"];
                    localStorage.setItem("auth", JSON.stringify(token));    // ref in frontend
                    setLoggedIn(true)
                }
            }catch(err) {
                console.log(err.message)
                setLoggedIn(false)
            }
        }
    })
    // ? control errors 
    if(formik.isSubmitting && Object.values(formik.errors).length > 0) {
        for(let prop in formik.errors) {
            Swal.fire({
                title: "Ops!",
                icon: "error",
                text: `${formik.errors[prop]}`
            })
        }
    }

  if(LoggedIn) {
    return navigate("/success")
  }

  return (
    <>
      <div className="content-login">
        <div className="login">
          <div className="img">
            <img src={logo} alt="" />
          </div>
          <form className="form" onSubmit={formik.handleSubmit}>
            <div className="titulo">
              <h1>Login</h1>
            </div>
              <input type="text"  value={formik.values.user} onChange={formik.handleChange} name='user' placeholder='User' />
              <input type="password" value={formik.values.password} onChange={formik.handleChange} placeholder='password' name='password'/>
              <button className='btn btn-color' type='submit' disabled={formik.isSubmitting}>Enviar</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
