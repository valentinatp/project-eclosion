function togglePassword(inputId, iconId) {
  const input = document.getElementById(inputId);
  const icon = document.getElementById(iconId);
  if (input.type === "password") {
    input.type = "text";
    icon.style.fill = "#198754";
  } else {
    input.type = "password";
    icon.style.fill = "#888";
  }
}

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
    }, 2000);
    return false; // Evita el envío real para mostrar el mensaje
  }
}