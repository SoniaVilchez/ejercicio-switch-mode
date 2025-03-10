document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Cargar el modo guardado en el almacenamiento local
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        themeToggle.textContent = "Modo Claro";
    }

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            themeToggle.textContent = "Modo Claro";
        } else {
            localStorage.setItem("dark-mode", "disabled");
            themeToggle.textContent = "Modo Oscuro";
        }
    });
});