// Función para validar el login del administrador
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

// Función para validar la contraseña
function validarContraseña() {
    const contraseña = document.getElementById("contraseña").value;
    if (contraseña.trim() === "") {
        mostrarError("errorContraseña", "Debe ingresar una contraseña");
        return false;
    } else if (contraseña.length < 8) {
        mostrarError("errorContraseña", "La contraseña debe tener al menos 8 caracteres");
        return false;
    } else {
        ocultarError("errorContraseña");
        return true;
    }
}

// Funciones para mostrar y ocultar errores
function mostrarError(idError, mensaje) {
    document.getElementById(idError).textContent = mensaje;
}

function ocultarError(idError) {
    document.getElementById(idError).textContent = "";
}

// Función para validar el formulario
function validarFormulario() {
    const usuarioValido = validarUsuario();
    const contraseñaValida = validarContraseña();

    if (usuarioValido && contraseñaValida) {
        const usuario = document.getElementById("usuario").value;
        const contraseña = document.getElementById("contraseña").value;

        // Validar las credenciales específicas
        if (usuario === "123@gmail.com" && contraseña === "Administrador") {
            window.location.href = "../../Admin/Menú/index.html";
            document.getElementById("usuario").value = "";
        } else {
            mostrarError("errorContraseña", "Usuario o contraseña incorrectos");
            // Limpiar el campo del correo
            
        }
    }
}

// Event listener para el formulario
document
    .getElementById("FormularioLogin")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        validarFormulario();
    });

// Función para mostrar/ocultar contraseña
function togglePasswords() {
    const passwordField = document.getElementById('contraseña');
    const showPasswordsCheckbox = document.getElementById('showPasswords');

    if (showPasswordsCheckbox.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}