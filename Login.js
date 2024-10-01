var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})

function maskDate(event) {
    let input = event.target;
    let value = input.value;
    
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(value)) {
        value = value.replace(/\D/g, "");  
        if (value.length > 2) value = value.replace(/(\d{2})(\d)/, "$1/$2");
        if (value.length > 5) value = value.replace(/(\d{2})\/(\d{2})(\d)/, "$1/$2/$3");
        input.value = value;
    }
}

function maskCPF(event) {
    let input = event.target;
    let value = input.value;
    
    if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value)) {
        value = value.replace(/\D/g, ""); 
        if (value.length > 3) value = value.replace(/(\d{3})(\d)/, "$1.$2");
        if (value.length > 6) value = value.replace(/(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
        if (value.length > 9) value = value.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4");
        input.value = value;
    }
}

document.getElementById('date').addEventListener('input', maskDate);
document.getElementById('cpf').addEventListener('input', maskCPF);