function redirectToForm() {
    window.location.href = 'signup.html';
}

function includeHTML() {
    const includes = document.querySelectorAll('[data-include]');
    includes.forEach((include) => {
        const filePath = include.getAttribute('data-include');
        fetch(filePath)
            .then((response) => response.text())
            .then((data) => {
                include.innerHTML = data;
            });
    });
}

