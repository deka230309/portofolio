function submitLogin() {
    const username = document.getElementById("usernameInput").value;
    if (username) {
        document.getElementById("usernameDisplay").innerText = `Welcome, ${username}`;
        document.getElementById("loginForm").style.display = "none"; // Sembunyikan form login
    } else {
        alert("Please enter a username.");
    }
}
