// js de inicio de sesión
// Este script se encarga de abrir el modal de inicio de sesión al hacer clic en el botón correspondiente
document.addEventListener('DOMContentLoaded', function () { // Espera a que el DOM esté completamente cargado antes de ejecutar el código
    const loginBtn = document.getElementById('openLoginModal'); // Obtiene el elemento con id 'openLoginModal' (el botón de iniciar sesión)
    if (loginBtn) { // Verifica que el botón exista en el DOM
        loginBtn.addEventListener('click', function (e) { // Agrega un evento click al botón de iniciar sesión
            e.preventDefault(); // Previene el comportamiento por defecto del enlace (navegar a otra página)
            fetch('login.html') // Realiza una petición para obtener el contenido de login.html
                .then(response => response.text()) // Cuando la respuesta llega, la convierte a texto
                .then(html => { // Cuando el texto está disponible, ejecuta la función
                    document.getElementById('loginModalBody').innerHTML = html; // Inserta el HTML obtenido dentro del modal (en el div con id 'loginModalBody')
                    var loginModal = new bootstrap.Modal(document.getElementById('loginModal')); // Crea una instancia del modal de Bootstrap usando el div con id 'loginModal'
                    loginModal.show(); // Muestra el modal en pantalla

                    // Limpia el contenido del modal al cerrarlo
                    document.getElementById('loginModal').addEventListener('hidden.bs.modal', function () {
                        document.getElementById('loginModalBody').innerHTML = ''; // Limpia el contenido
                    });
                });
            });
    }
});
// hasta aqui
