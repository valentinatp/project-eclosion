//cambio de iconos de contraseña
function togglePassword(inputId) {
  const input = document.getElementById(inputId);
  const icon = document.getElementById('icon-' + inputId);
  if (input.type === "password") {
    input.type = "text";
    icon.src = "pictures/eyes-open.svg"; // Cambia al ícono de ojo cerrado
  } else {
    input.type = "password";
    icon.src = "pictures/eyes-close.svg"; // Cambia al ícono de ojo abierto
  }
}

// Validación de contraseñas
function validarContraseñas() {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const errorText = document.getElementById("passwordError");
  const registroExitoso = document.getElementById("registroExitoso");

  if (password !== confirmPassword) {
    errorText.classList.remove("d-none");
    registroExitoso.classList.add("d-none");
    return false;
  } else {
    errorText.classList.add("d-none");
    registroExitoso.classList.remove("d-none");
   
   
    // Redirige después de 2 segundos
    setTimeout(function() {
      window.location.href = "index.html";
    }, 2000); // 2000 milisegundos = 2 segundos
    return false; // Evita el envío real para mostrar el mensaje
  }
}

