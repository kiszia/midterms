const isValidEmail = email => {
    const re = /^[^\s@]+@[^\s@]+\.(com|gov|ph)$/;
    return re.test(String(email).toLowerCase());
};

function validateForm() {
    try {
        //user inputs
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const reEnterPassword = document.getElementById('reEnterPassword').value;

        // Reset error messages
        document.getElementById('usernameError').innerText = "";
        document.getElementById('emailError').innerText = "";
        document.getElementById('passwordError').innerText = "";
        document.getElementById('reEnterPasswordError').innerText = "";

        if (!username || !email || !password || !reEnterPassword) {
            throw new Error("Please fill out all fields in the form.");
        }
         
        if (!/^[a-zA-Z0-9]+$/.test(username)) {
            throw new Error("Invalid username. Please use only alphanumeric characters.");
        }
 
        if (!isValidEmail(email)) {
            throw new Error("Invalid email address. Please enter a valid email with '@' and '.com', '.gov', or '.ph' only.");
        }
 
        if (!password || password.length < 7) {
            throw new Error("Invalid password. Password must be at least 7 characters long.");
        }

        // Confirm password match
        if (password !== reEnterPassword) {
            throw new Error("Passwords do not match. Please re-enter your password.");
        }

        // Redirect to login page
        alert("Sign-up successful!"); 
        window.location.href = 'login.html';

    } catch (error) {
        // error messages
        switch(error.message) {
            case "Please fill out all fields in the form.":
                alert("Validation Error: " + error.message);
                break;
            case "Invalid username. Please use only alphanumeric characters.":
                document.getElementById('usernameError').innerText = error.message;
                break;
            case "Invalid email address. Please enter a valid email with '@' and '.com', '.gov', or '.ph' only.":
                document.getElementById('emailError').innerText = error.message;
                break;
            case "Invalid password. Password must be at least 7 characters long.":
                document.getElementById('passwordError').innerText = error.message;
                break;
            case "Passwords do not match. Please re-enter your password.":
                document.getElementById('reEnterPasswordError').innerText = error.message;
                break;
            default:
                alert("Validation Error: " + error.message);
                break;
        }
    } finally {
        
     }
}
