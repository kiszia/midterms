const isValidEmail = email => {
    const re = /^[^\s@]+@[^\s@]+\.(com|gov|ph)$/;
    return re.test(String(email).toLowerCase());
};

function validateLoginForm() {
    try {
        //user inputs
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Reset error messages
        document.getElementById('emailError').innerText = "";
        document.getElementById('passwordError').innerText = "";

        if (!email || !password) {
            throw new Error("Please fill out all fields in the form.");
        }
 
        if (!isValidEmail(email)) {
            throw new Error("Invalid email address. Please enter a valid email with '@' and '.com', '.gov', or '.ph' only.");
        }
 
        if (!password || password.length < 7) {
            throw new Error("Invalid password. Password must be at least 7 characters long.");
        }

        // Redirect to homepage
        alert("Login successful!"); 
        window.location.href = 'homepage.html';

    } catch (error) {
        // error messages
        switch(error.message) {
            case "Please fill out all fields in the form.":
                alert("Validation Error: " + error.message);
                break;
            case "Invalid email address. Please enter a valid email with '@' and '.com', '.gov', or '.ph' only.":
                document.getElementById('emailError').innerText = error.message;
                break;
            case "Invalid password. Password must be at least 7 characters long.":
                document.getElementById('passwordError').innerText = error.message;
                break;
            default:
                alert("Validation Error: " + error.message);
                break;
        }
    } finally {
        
    }
}
