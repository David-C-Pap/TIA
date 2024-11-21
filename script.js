document.getElementById("password").addEventListener("input", function () {
    const password = this.value;
    const errorMessage = document.getElementById("password-error");

    if (password.length < 6) {
        errorMessage.textContent = "Parola trebuie să aibă cel puțin 6 caractere.";
    } else {
        errorMessage.textContent = "";
    }
});

document.getElementById("file-upload").addEventListener("change", function () {
    const fileMessage = document.getElementById("file-message");
    if (this.files.length > 0) {
        fileMessage.textContent = `Fișier selectat: ${this.files[0].name}`;
    } else {
        fileMessage.textContent = "Niciun fișier selectat.";
    }
});

document.getElementById("form-tia").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Formular trimis cu succes!");
});
