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
                let request = await (await fetch(`http://127.0.0.1:5015/validateUsuario`, {
                    method: "GET",
                    body: JSON.stringify(values),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })).json();
    
                if(request.status >= 400) {
                     Swal.fire({
                        title: "Ops!, ha ocurrido un error",
                        icon: "error",
                        text: request.message
                    })
                    return setLoggedIn(false)
                }else {
                    let headers = request.headers; 
                    let token = headers["X-Authorization"];
                    localStorage.setItem("auth", JSON.stringify(token));    // ref in frontend
                    setLoggedIn(true)
                }
            }catch(err) {
                console.log(err)
                setLoggedIn(false)
            }
        }
    })
    // ? control errors 
    if(formik.isSubmitting && Object.values(formik.errors).length > 0) {
        for(let prop in formik.errors) {
            Swal.fire({
                title: "Ops!, ha ocurrido un error",
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
          <div className="form">
            <div className="titulo">
              <h1>Login</h1>
            </div>
            <form action="" onSubmit={formik.handleSubmit}>
              <input type="text"  value={formik.values.user} onChange={formik.handleChange} name='user' placeholder='User' />
              <input type="password" value={formik.values.password} onChange={formik.handleChange} placeholder='password' name='password'/>
              <button className='btn btn-color' type='submit' disabled={formik.isSubmitting}>Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
