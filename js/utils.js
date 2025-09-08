function calcularEdad(fecha) {
    const hoy = new Date();
    const nacimiento = new Date(fecha);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad;
}

function mostrarLista(frutas) {
    console.log("Lista de frutas disponibles:");
    frutas.forEach((fruta, i) => {
        console.log(`${i + 1}. ${fruta}`);
    });
}

function buscarFruta(frutas, frutaBuscada) {
    if (frutas.includes(frutaBuscada)) {
        mostrarResultado(`Sí, tenemos ${frutaBuscada}!`);
    } else {
        mostrarResultado(`No, no tenemos ${frutaBuscada}!`);
    }
}

function mostrarEnConsolaYResultado(mensaje) {
    console.log(mensaje);
    mostrarResultado(mensaje);
}

function compararIgualdadSimple() {
    return 10 == '10';
}

function compararIgualdadEstricta() {
    return 10 === '10';
}

function obtenerTipoDato(valor) {
    return typeof valor;
}

function compararBooleanoConNumero() {
    return true == 1; 
}

function crearCiudad(nombre, fechaFundacion, poblacion, extension) {
    return {
        nombre: nombre,
        fechaFundacion: fechaFundacion,
        poblacion: poblacion,
        extension: extension
    };
}

function recorrerObjetoMap(objeto) {
    return Object.keys(objeto).map(function(clave) {
            return clave + ": " + objeto[clave];
        }).join("<br>");
}

function validarNumero(valor) {
    return !isNaN(valor) && valor > 0;
}

function mostrarResultado(texto) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = texto;
}
