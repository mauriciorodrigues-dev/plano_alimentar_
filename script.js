function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "dyrson1993" && password === "26121993") {
        openModal();
    } else {
        alert("Credenciais incorretas. Tente novamente.");
    }
}

function openModal() {
    var modal = document.getElementById("welcomeModal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("welcomeModal");
    modal.style.display = "none";
}

function redirectToWelcomePage() {
    window.location.href = "paginas/pag_boas_vindas/index.html";
}
