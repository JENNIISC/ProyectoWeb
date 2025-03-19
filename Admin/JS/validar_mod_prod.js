document.getElementById('btnAgregar').addEventListener('click', function() {
    // Obtén los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
  

    // Limpia los mensajes de error previos
    document.getElementById('errorNombre').innerText = "";
    document.getElementById('errorPrecio').innerText = "";


    // Validación de campos
    let isValid = true;

    // Expresión regular para validar solo letras y espacios
    const regexNombre = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/;
    
    if (nombre === "") {
        errorNombre.innerText = "Por favor, completa este campo.";
        isValid = false;
    } else if (!regexNombre.test(nombre)) {
        errorNombre.innerText = "Solo se permiten letras y espacios.";
        isValid = false;
    }

    // Expresión regular para validar precios (números enteros o con hasta dos decimales, incluyendo .00)
    const regexPrecio = /^\d+(\.\d{1,2})?$/;

    if (precio === "" || !regexPrecio.test(precio)) {
        errorPrecio.innerText = "El precio debe ser un número válido con hasta dos decimales.";
        isValid = false;
    }

    if (isValid) {
        // Si los campos son válidos, abre el modal
        const modal = new bootstrap.Modal(document.getElementById('modal_confirm'));
        modal.show();
    }
});

// Restricción de entrada en el campo "precio"
document.getElementById("precio").addEventListener("keypress", function(event) {
    const input = event.target.value;
    const dotCount = (input.match(/\./g) || []).length;

    // Permite solo números y un punto decimal
    if (!/[0-9.]/.test(event.key) || (event.key === '.' && dotCount >= 1)) {
        event.preventDefault();
    }
});

// Restringe la entrada en el campo "nombre" para evitar números y símbolos
document.getElementById("nombre").addEventListener("keypress", function(event) {
    if (!/[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]/.test(event.key)) {
        event.preventDefault();
    }
});