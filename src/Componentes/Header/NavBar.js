
const NavBar= () => {
    return (
      <>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">ICE CLUB</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Tienda</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Marcas
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Nike</a></li>
            <li><a class="dropdown-item" href="#">Supreme</a></li>
            <li><a class="dropdown-item" href="#">Esentials</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Buscar..."/>
        <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
          {/* <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <a href="#" class="navbar-brand">ICE CLUB</a>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
              <span class="navbar-toggler-icon"></span>  
            </button>
            <div class="collapse navbar-collapse" id="navbarMenu">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a href="#" class='nav-link'>Inicio</a>
                </li>
                <li class="nav-item">
                  <a href="#" class='nav-link'>Tienda</a>
                </li>
                <li class="nav-item">
                  <a href="#" class='nav-link'>Marcas</a>
                </li>
                <li class="nav-item">
                  <a href="#" class='nav-link'>Historia</a>
                </li>
              </ul>
            </div>
          </nav> */}
      </>
    )
}
export default NavBar