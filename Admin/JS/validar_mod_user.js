
function togglePasswords() {
    // Obtener los campos de contraseña
    const passwordField = document.getElementById('contraseña');
    const confirmPasswordField = document.getElementById('contraseñaConf');
    
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


document.getElementById('agregar').addEventListener('click', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;
    const contraseñaConf = document.getElementById('contraseñaConf').value;

    document.getElementById('errorNombre').innerText = "";
    document.getElementById('errorUsuario').innerText = "";
    document.getElementById('errorContraseña').innerText = "";
    document.getElementById('errorContraseñaConf').innerText = ""; 
    
    document.getElementById('showPasswords').addEventListener('change', togglePasswords);

    let isValid = true;
    if (contraseña !== contraseñaConf) {
        document.getElementById('errorContraseñaConf').innerText = "Las contraseñas no coinciden";
        isValid = false;
    }
    if (nombre === "") {
        document.getElementById('errorNombre').innerText = "Por favor, completa este campo.";
        isValid = false;
    }
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+(?:\.(?!com\.)[a-zA-Z]{2,}|\.com(?!.*\.com))$/;
    if (usuario === "") {
        document.getElementById('errorUsuario').innerText = "Ingrese un correo";
        isValid = false;
    } else if(!regex.test(usuario)){
        document.getElementById('errorUsuario').innerText = "Debe ingresar un correo electronico válido";
        isValid = false;}
    if (contraseña === "") {
        document.getElementById('errorContraseña').innerText = "Ingrese una contraseña";
        isValid = false;
    }else if (contraseña.length < 8) {
        document.getElementById('errorContraseña').innerText = "La contraseña debe tener al menos 8 caracteres";
        isValid = false;
    } 
     if (contraseñaConf === ""){
        document.getElementById('errorContraseñaConf').innerText = "Confirme la contraseña";
        isValid = false;

    }

    
    if (isValid) {
        const modal = new bootstrap.Modal(document.getElementById('modal-1'));
        modal.show();

        // Limpiar los campos del formulario
        document.getElementById('nombre').value = "";
        document.getElementById('usuario').value = "";
        document.getElementById('contraseña').value = "";
        document.getElementById('contraseñaConf').value = "";
    }
});




document.getElementById("nombre").addEventListener("keypress", function(event) {
    if (!/[a-zA-Z]/.test(event.key)) {
        event.preventDefault();
    }
});