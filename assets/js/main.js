document.addEventListener('DOMContentLoaded', function() {
    // Inicializa los dropdowns cuando la página y los scripts estén listos
    var elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, {
        hover: false, 
        coverTrigger: false
    });
});

function loadComponent(componentId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el componente: ' + filePath);
            }
            return response.text();
        })
        .then(data => {
            // Inyecta el HTML en el contenedor
            document.getElementById(componentId).innerHTML = data;

            // Ahora inicializa los dropdowns dentro del nav recién cargado
            var elems = document.querySelectorAll('.dropdown-trigger');
            M.Dropdown.init(elems, {
                hover: false,
                coverTrigger: false
            });
        })
        .catch(error => {
            console.error(error);
        });
}

function nota() {
    // Selecciona el elemento con id "mensaje" donde se mostrara el mensaje
    const mensaje = document.getElementById('mensaje');
  
    // Alterna la visibilidad del mensaje
    if (mensaje.style.display === 'none') {
      mensaje.style.display = 'block'; // Muestra el mensaje
    } else {
      mensaje.style.display = 'none'; // Oculta el mensaje
    }
  }
