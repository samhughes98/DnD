var btn = document.getElementById("loginBtn");
var loginField = document.getElementById("loginDiv");

btn.addEventListener('click', function() {  

  if (loginField.style.display === 'none') {
    loginField.style.display = 'block';
  } else { 
    loginField.style.display = 'none';
}


});