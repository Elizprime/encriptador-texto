const texto_introducido = document.querySelector("#texto-introducido");
const texto_encriptado = document.querySelector("#texto-encriptado");
const btnCopiar = document.querySelector(".btnCopiar");

const matriz_code = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

document.querySelector(".btnEncriptar").addEventListener("click", () => {
    const texto = texto_introducido.value;
    const texto_encriptado_valor = encriptar(texto);
    texto_encriptado.value = texto_encriptado_valor;
    texto_introducido.value = ''; // Borrar el texto ingresado
});

document.querySelector(".btnDesencriptar").addEventListener("click", () => {
    const texto_encriptado_valor = texto_encriptado.value;
    const texto_desencriptado = desencriptar(texto_encriptado_valor);
    texto_encriptado.value = texto_desencriptado; // Mostrar el resultado en el cuadro de texto de salida
    texto_introducido.value = ''; // Borrar el texto ingresado
});

btnCopiar.addEventListener("click", () => {
    texto_encriptado.select();
    document.execCommand("copy");
});

function encriptar(fraseEncriptada) {
    matriz_code.forEach(codigo => {
        fraseEncriptada = fraseEncriptada.replaceAll(codigo[0], codigo[1]);
    });
    return fraseEncriptada;
}

function desencriptar(fraseDesencriptada) {
    matriz_code.forEach(codigo => {
        fraseDesencriptada = fraseDesencriptada.replaceAll(codigo[1], codigo[0]);
    });
    return fraseDesencriptada;
}
