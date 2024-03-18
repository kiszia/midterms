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
 
document.addEventListener("DOMContentLoaded", function() {
  var nav = document.getElementById("nav-placeholder");
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) {
      if (xmlhttp.status == 200) {
        nav.innerHTML = xmlhttp.responseText;
      } else if (xmlhttp.status == 400) {
        console.error('There was an error 400');
      } else {
        console.error('something else other than 200 was returned');
      }
    }
  };
  xmlhttp.open("GET", "nav.html", true);
  xmlhttp.send();
}); 