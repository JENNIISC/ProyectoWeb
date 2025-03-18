document.getElementById('btnAgregar').addEventListener('click', function() {
    // Obtén los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
  

    // Limpia los mensajes de error previos
    document.getElementById('errorNombre').innerText = "";
    document.getElementById('errorPrecio').innerText = "";


    // Validación de campos
    let isValid = true;

    // Validar nombre (sin símbolos)
    if (nombre === "" || /[^a-zA-Z\s]/.test(nombre)) {
      document.getElementById('errorNombre').innerText = "El nombre no debe contener símbolos.";
      isValid = false;
  }

  // Validación de precio (solo números, sin símbolos y hasta dos decimales)
  if (precio === "" || isNaN(precio) || precio <= 0 || /[^0-9.]/.test(precio)) {
      document.getElementById('errorPrecio').innerText = "El precio debe ser un número válido sin símbolos.";
      isValid = false;
  } else {
      // Asegura que el precio tiene máximo dos decimales
      const precioFloat = parseFloat(precio);
      if (precioFloat.toFixed(2) !== precioFloat.toString()) {
          document.getElementById('errorPrecio').innerText = "El precio debe tener como máximo dos decimales.";
          isValid = false;
      }
  }

  if (isValid) {
      // Si los campos son válidos, abre el modal
      const modal = new bootstrap.Modal(document.getElementById('modal_confirm'));
      modal.show();
  }
});

document.getElementById("precio").addEventListener("keypress", function(event) {
  const input = event.target.value;
  const dotCount = (input.match(/\./g) || []).length;

  // Evita cualquier carácter que no sea número o punto, y solo permite un punto decimal
  if (!/[0-9.]/.test(event.key) || (event.key === '.' && dotCount >= 1)) {
      event.preventDefault();
  }
});

document.getElementById("precio").addEventListener("blur", function(event) {
  let precio = event.target.value;
  if (precio) {
      // Asegura que el precio tenga solo dos decimales al perder el foco
      const precioFormateado = parseFloat(precio).toFixed(2);
      event.target.value = precioFormateado;
  }
});