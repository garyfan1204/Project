var login = document.querySelectorAll("#login");
var registerpage = document.getElementById("register");
var closebtn = document.querySelectorAll("#close");
var loginpage = document.getElementById("loginpage");
var registerpage = document.getElementById("registerpage");

login.forEach(function(link){
    link.addEventListener("click", function(event){
        event.preventDefault();
        loginpage.style.display = "flex";
        registerpage.style.display = "none";
    });
})

register.addEventListener("click", function(event) {
    event.preventDefault();
    loginpage.style.display = "none";
    registerpage.style.display = "flex";
});

closebtn.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
        event.preventDefault();
        loginpage.style.display = "none";
        registerpage.style.display = "none";
    });
});

