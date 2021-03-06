const side_nav = document.querySelectorAll('.sidenav');
M.Sidenav.init(side_nav, {});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, {});
  });

// login-register slider

var x = document.querySelector("#login");
var y = document.querySelector("#register");
var z = document.querySelector("#btn");

function register(){
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
}

// login-register slider