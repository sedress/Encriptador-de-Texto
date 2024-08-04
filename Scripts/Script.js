//función para encriptar texto
function encriptar(texto) {
    let encriptacion = {'a': "ai", 'e': "enter", 'i':"imes",'o':"ober",'u':"ufat"};
    return texto.replace(/[aeiou]/g, match => encriptacion[match]);
};

//función para desencriptar texto
function desencriptar(texto) {
    let desencriptacion = {"ai": 'a', "enter": 'e', "imes": 'i', "ober": 'o', "ufat": 'u'};
    return texto.replace(/ai|enter|imes|ober|ufat/g, match => desencriptacion[match]);
}

//Botones

//Botón Encriptar
document.getElementById("boton-encriptar").addEventListener("click", () => {
    let inputTexEncriptar = document.getElementById("input-text-1").value;
    let ResultadoEncriptar = encriptar(inputTexEncriptar);
    document.getElementById("input-text-2").innerText = ResultadoEncriptar;
});

//Botón Desencriptar
document.getElementById("boton-desencriptar").addEventListener("click", () => {
    let inputTexDesencriptar = document.getElementById("input-text-1").value;
    let ResultadoDesencriptar = desencriptar(inputTexDesencriptar)
    document.getElementById("input-text-2").innerText = ResultadoDesencriptar;
});

//Botón Copiar
document.getElementById("boton-copiar").addEventListener('click', function(){
    var TextoCopiar = document.getElementById("input-text-2");
    TextoCopiar.select();
    TextoCopiar.setSelectionRange(0, 99999);

    document.execCommand('copy');
    alert('Texto copiado');
});