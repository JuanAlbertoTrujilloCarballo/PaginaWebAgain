window.onload = inicializar;

var VIP_Suscription;
var VIP_Login;

function inicializar() {
    VIP_Login = document.getElementById("VIP_Login");
    VIP_Login = addEventListener("submit", enviarLogin, false);

    refVip_Login = firebase.database().ref().child("Login");
}

function enviarLogin(event) {
    event.preventDefault();
    refVip_Login.push({
        Nombre: event.target.email.value,
        contraseña: event.target.pwd.value,
    });
}



function inicializar() {
    VIP_Suscription = document.getElementById("VIP_Suscription");
    VIP_Suscription = addEventListener("submit", enviarSuscripcion, false);

    refVip_Suscripcion = firebase.database().ref().child("Suscripcion");
}

function enviarSuscripcion(event) {
    event.preventDefault();
    refVip_Suscripcion.push({
        tipo: event.target.radio1.value,
        tipo: event.target.radio2.value,
        extra: event.target.extra1.value,
        extra: event.target.extra2.value,
        extra: event.target.extra3.value,

    });
}