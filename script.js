// JavaScript para mostrar el aviso de cookies
document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptCookiesButton = document.getElementById("accept-cookies");

    acceptCookiesButton.addEventListener("click", function () {
        cookieBanner.style.display = "none";
    });

    // Mostrar el aviso de cookies
    cookieBanner.style.display = "block";
});
