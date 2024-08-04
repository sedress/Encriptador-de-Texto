//Restricciones
function restricciones(texto) {
    return /^[a-z\s]+$/.test(texto);
}

//Encriptar texto
function encriptar(texto) {
    let encriptacion = {'a': "ai", 'e': "enter", 'i':"imes",'o':"ober",'u':"ufat"};
    return texto.replace(/[aeiou]/g, match => encriptacion[match]);
};

//Desencriptar texto
function desencriptar(texto) {
    let desencriptacion = {"ai": 'a', "enter": 'e', "imes": 'i', "ober": 'o', "ufat": 'u'};
    return texto.replace(/ai|enter|imes|ober|ufat/g, match => desencriptacion[match]);
}

//Mostrar el mensaje de advertencia
function mostrarMensajeAdvertencia() {
    let advertencia = document.querySelector(".advertencia-1");
    advertencia.style.display = "block";
}

//Ocultar el mensaje de advertencia
function ocultarMensajeAdvertencia() {
    let advertencia = document.querySelector(".advertencia-1");
    advertencia.style.display = "none";
}

// Función para mostrar elementos de la segunda sección
function mostrarSegundaSeccion() {
    document.querySelector(".input-text-2").style.display = "block";
    document.querySelector("#boton-copiar").style.display = "block";
    document.querySelector(".Muñeco").style.display = "none";
    document.querySelector(".segunda-seccion-texto-1").style.display = "none";
    document.querySelector(".segunda-seccion-texto-2").style.display = "none";
}

// Función para ocultar elementos de la segunda sección
function ocultarSegundaSeccion() {
    document.querySelector(".input-text-2").style.display = "none";
    document.querySelector("#boton-copiar").style.display = "none";
    document.querySelector(".Muñeco").style.display = "block";
    document.querySelector(".segunda-seccion-texto-1").style.display = "block";
    document.querySelector(".segunda-seccion-texto-2").style.display = "block";
}

//Botones

//Botón Encriptar
document.getElementById("boton-encriptar").addEventListener("click", () => {
    let inputTexEncriptar = document.getElementById("input-text-1").value;
        if (restricciones(inputTexEncriptar)) {
            ocultarMensajeAdvertencia();
            let ResultadoEncriptar = encriptar(inputTexEncriptar);
            document.getElementById("input-text-2").innerText = ResultadoEncriptar;
            mostrarSegundaSeccion();
        } else {
            mostrarMensajeAdvertencia();
            ocultarSegundaSeccion();
    }
});

//Botón Desencriptar
document.getElementById("boton-desencriptar").addEventListener("click", () => {
    let inputTexDesencriptar = document.getElementById("input-text-1").value;
        if (restricciones(inputTexDesencriptar)) {
            ocultarMensajeAdvertencia();
            let ResultadoDesencriptar = desencriptar(inputTexDesencriptar);
            document.getElementById("input-text-2").innerText = ResultadoDesencriptar;
            mostrarSegundaSeccion();
    } else {
            mostrarMensajeAdvertencia();
            ocultarSegundaSeccion();
    }
});

//Botón Copiar
document.getElementById("boton-copiar").addEventListener('click', function(){
    var TextoCopiar = document.getElementById("input-text-2");
    TextoCopiar.select();
    TextoCopiar.setSelectionRange(0, 99999);

    document.execCommand('copy');
    alert('Texto copiado');
});