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
    return Object.keys(objeto).map(function(clave){return clave + ": " + objeto[clave];}).join("<br>");
}

function validarNumero(valor) {
    return !isNaN(valor) && valor > 0;
}

function filtrarNombresConA(lista) {
    const nombres = lista.split(",");
    const resultado = [];

    for (let i = 0; i < nombres.length; i++) {
        const nombre = nombres[i].trim();
        if (nombre[0] && nombre[0].toUpperCase() === "A") {
            resultado.push(nombre);
        }
    }

    if (resultado.length > 0) {
        return "Nombres que comienzan con 'A':<br>" + resultado.join("<br>");
    } else {
        return "No hay nombres que empiecen con 'A'.";
    }
}

function reemplazarPalabras(texto, buscar, reemplazo) {
    if (!texto || !buscar || !reemplazo) {
        return "Debes ingresar un texto, la palabra a reemplazar y la palabra nueva.";
    }
    return texto.replaceAll(buscar, reemplazo);
}

function cortarTexto(texto, cantidad) {
    return texto.slice(0, cantidad);
}

function stringConSeparador(texto) {
    const elementos = texto.split(",");
    return elementos.join(" - ");
}

function calcularRecaudacion(lista) {
    const pedidos = lista.split(",");
    let total = 0;

    for (let i = 0; i < pedidos.length; i++) {
        const partes = pedidos[i].split(":");
        const monto = parseFloat(partes[1]);
        if (!isNaN(monto)) {
            total += monto;
        }
    }

    return "La recaudación total es: $" + total.toFixed(2);
}

function mostrarResultado(texto) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = texto;
}
