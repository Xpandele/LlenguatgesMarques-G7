var header = document.getElementById("navbar");
header.innerHTML =`
<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="./index.html">Inici</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./index2.html">Pagina 2</a>
              </li>
              <li class="nav-item">
              <a class="nav-link" href="./index3.html">Pagina 3</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./index4.html">Pagina 4</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      `;