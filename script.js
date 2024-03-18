document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form submission
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Your login validation logic here
    // For demonstration purposes, let's just alert the entered username and password
    alert('Username: ' + username + '\nPassword: ' + password);
  });