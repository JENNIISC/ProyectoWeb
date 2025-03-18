document.getElementById('btnAgregar').addEventListener('click', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const errorCategoria = document.getElementById('errorCategoria');
    
    errorCategoria.innerText = "";
    let isValid = true;

    // Expresión regular: solo letras (mayúsculas y minúsculas), sin números ni símbolos
    const regex = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/;

    if (nombre === "") {
        errorCategoria.innerText = "Por favor, completa este campo.";
        isValid = false;
    } else if (!regex.test(nombre)) {
        errorCategoria.innerText = "Solo se permiten letras.";
        isValid = false;
    }

    if (isValid) {
        const modal = new bootstrap.Modal(document.getElementById('modal-1'));
        modal.show();
    }
});
