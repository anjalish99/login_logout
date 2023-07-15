function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    // Check email and password
    // You can implement your own logic here
    if (email === "example@email.com" && password === "password") {
        showWelcomeMessage(email);
    } else {
        alert("Invalid email or password!");
    }
}

function logout() {
    hideWelcomeMessage();
}

function showWelcomeMessage(email) {
    document.getElementById("welcome-message").innerText = "Welcome, " + email + "!";
    document.getElementById("login-container").style.display = "none";
    document.getElementById("welcome-container").style.display = "block";
}

function hideWelcomeMessage() {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("welcome-message").innerText = "";
    document.getElementById("login-container").style.display = "block";
    document.getElementById("welcome-container").style.display = "none";
}
