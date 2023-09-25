function Dasboard() {

    function cerrarSesion() {
        window.location.href = '/';
      }

  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">Loguin</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <button class="btn btn-primary" aria-current="page" onClick={cerrarSesion}>Cerrar Session</button>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        <div className="container d-flex justify-content-center align-items-center pt-5 mt-5">
            <h2>Hola Mundo</h2>
        </div>
    </>
  )
}

export default Dasboard
