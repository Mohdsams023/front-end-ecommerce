// Header and footer added dynamycally
$(function () {
    $('#header').load('includes/header.html');
    $('#footer').load('includes/footer.html');
});

// login Validation 
function validateLogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    if (email === "admin@admin.com" && password === "123456") {
      alert("Login successful!");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  }

  // Header and footer added All Pages dynamycally
$(function () {
  $('#header').load('../includes/header.html');
  $('#footer').load('../includes/footer.html');
});
