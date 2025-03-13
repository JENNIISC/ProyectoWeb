//Validación del login del administrador
function togglePasswords() {
    // Obtener los campos de contraseña
    const passwordField = document.getElementById('contraseña');
    
    
    // Obtener el checkbox
    const showPasswordsCheckbox = document.getElementById('showPasswords');
    
    // Cambiar el tipo de input de los campos de contraseña
    if (showPasswordsCheckbox.checked) {
        passwordField.type = 'text';
        confirmPasswordField.type = 'text';
    } else {
        passwordField.type = 'password';
        confirmPasswordField.type = 'password';
    }
}




document
    .getElementById("FormularioLogin")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        validarFormulario();
    });

//Función para validar el login del administrador
function validarUsuario() {
        const usuario = document.getElementById("usuario").value;
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+(?:\.(?!com\.)[a-zA-Z]{2,}|\.com(?!.*\.com))$/;
        if (usuario.trim() === "") {
            mostrarError("errorUsuario", "Ingrese un usuario");
            return false;
        } else if (!regex.test(usuario)) {
            mostrarError("errorUsuario", "Ingrese un correo válido");
            return false;
        } else {
            ocultarError("errorUsuario");
            return true;
        }
}

//Funcion validar contraseña
function validarContraseña() {
        const contraseña = document.getElementById("contraseña").value;
        if (contraseña.trim() === "") {
            mostrarError("errorContraseña", "Debe ingresar una contraseña");
            return false;
        }else if (contraseña.length < 8) {
            mostrarError("errorContraseña", "La contraseña debe tener al menos 8 caracteres");
            return false;} 
        else {
            ocultarError("errorContraseña");
            return true;
        }
}

//Funciones para mostrar y ocultar errores
function mostrarError(idError, mensaje) {
        document.getElementById(idError).textContent = mensaje;
}

function ocultarError(idError) {
        document.getElementById(idError).textContent = "";
}

//Constructores de las clases
function validarFormulario() {
        const usuarioValido = validarUsuario();
        const contraseñaValida = validarContraseña();
        if (usuarioValido && contraseñaValida) {
                window.location.href = "../../Admin/Menú/index.html"; 
        }
}