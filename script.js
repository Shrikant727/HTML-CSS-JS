function login() {
    // Add authentication logic here (e.g., check credentials)
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Example: Simple check for demo purposes
    if (username === "user" && password === "pass") {
        alert("Login successful!");
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

