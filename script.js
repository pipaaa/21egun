// JavaScript para mostrar el aviso de cookies con animación
document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptCookiesButton = document.getElementById("accept-cookies");

    acceptCookiesButton.addEventListener("click", function () {
        cookieBanner.style.display = "none";
    });

    // Mostrar el aviso de cookies con la animación de desvanecimiento
    setTimeout(function () {
        cookieBanner.style.opacity = "1";
    }, 1000); // Mostrar después de 1 segundo
});
