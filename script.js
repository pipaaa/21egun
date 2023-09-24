// JavaScript para ocultar el aviso de cookies al hacer clic en "Aceptar"
document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptCookiesButton = document.getElementById("accept-cookies");

    acceptCookiesButton.addEventListener("click", function () {
        cookieBanner.style.display = "none";
    });
});

// Función para redireccionar a las subpáginas
function navigateTo(page) {
    window.location.href = page;
}
// JavaScript para ocultar el aviso de cookies al hacer clic en "Aceptar"
document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptCookiesButton = document.getElementById("accept-cookies");

    acceptCookiesButton.addEventListener("click", function () {
        cookieBanner.classList.remove("show-cookie-banner"); // Ocultamos el aviso de cookies
    });

    // Mostramos el aviso de cookies con la animación de deslizamiento
    setTimeout(function () {
        cookieBanner.classList.add("show-cookie-banner");
    }, 500); // Mostrar después de 500 ms (medio segundo)
});
