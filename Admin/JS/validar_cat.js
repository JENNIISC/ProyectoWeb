document.getElementById('btnAgregar').addEventListener('click', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    document.getElementById('errorCategoria').innerText = "";
    let isValid = true;
    
    // Expresión regular para permitir solo letras y espacios
    const regex = /^[A-Za-zÀ-ÿ\s]+$/;
    
    if (nombre === "") {
        document.getElementById('errorCategoria').innerText = "Por favor, completa este campo.";
        isValid = false;
    } else if (!regex.test(nombre)) {
        document.getElementById('errorCategoria').innerText = "No se permiten símbolos ni números.";
        isValid = false;
    }
    
    if (isValid) {
        const modal = new bootstrap.Modal(document.getElementById('Agregado'));
        modal.show();
    }
});



