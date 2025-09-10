function calculadoraEdad() {
    const nombre = document.getElementById("nombre").value;
    const fecha = document.getElementById("fecha").value;

    if (!nombre || !fecha) {
        mostrarResultado("Por favor completá tu nombre y fecha de nacimiento.");
        return;
    }
    const edad = calcularEdad(fecha);
    mostrarResultado(`Tu edad es: ${edad}`);
    console.log(`Hola ${nombre}, tienes ${edad} años!`);
}

function tirandoFruta() {
    const frutas = [
        "manzana", 
        "banana", 
        "pera", 
        "naranja", 
        "uva", 
        "sandía", 
        "frutilla", 
        "durazno", 
        "kiwi", 
        "mango"
    ];

    mostrarLista(frutas);
    const frutaBuscada = prompt("¿Qué fruta estás buscando?").toLowerCase();
    buscarFruta(frutas, frutaBuscada);
}
function comparandoDatosTipos() {
    let mensaje = "";

    mensaje += `A. ¿10 == '10'? : ${compararIgualdadSimple()}<br>`;

    mensaje += `B. ¿10 === '10'? : ${compararIgualdadEstricta()}<br>`;
    mensaje += "Diferencia: '==' compara valores sin importar el tipo, mientras que '===' compara valor y tipo.<br>";

    mensaje += `C. El tipo de dato de 10.6 es: ${obtenerTipoDato(10.6)}<br>`;

    mensaje += `D. ¿true == 1? : ${compararBooleanoConNumero()}<br>`;
    mensaje += "Conclusión: JavaScript convierte valores al comparar con '=='. Esto se llama 'coerción de tipos'.<br>";

    mostrarEnConsolaYResultado(mensaje);
}
function yoObjeto() {
    const nombre = document.getElementById("ciudadNombre").value.trim();
    const fechaFundacion = document.getElementById("ciudadFecha").value;
    const poblacion = document.getElementById("ciudadPoblacion").value;
    const extension = document.getElementById("ciudadExtension").value;

    if (!nombre || !fechaFundacion || !validarNumero(poblacion) || !validarNumero(extension)) {
        mostrarResultado("Datos inválidos. Por favor ingrese todos los valores correctamente.");
        return;
    }

    const ciudad = crearCiudad(nombre, fechaFundacion, poblacion, extension);

    const resultado = recorrerObjetoMap(ciudad);

    mostrarResultado(resultado);
    console.log("Objeto ciudad:", ciudad);
}
function trianguloSimple(filas) {
    Array.from({ length: filas }, (_, i) => i + 1).map(num => console.log("*".repeat(num)));
}
trianguloSimple(5);

function trianguloGuiones(filas) {
    Array.from({ length: filas }, (_, i) => i).map(i => {
             const espacios = filas - i - 1; 
             const estrellas = 2 * i + 1;   
             console.log("-".repeat(espacios) + "*".repeat(estrellas) + "-".repeat(espacios));
         });
}
trianguloGuiones(5);

function nombresConA() {
    const msj = prompt("Ingrese una lista de nombres separados por coma:");
    if (!msj) {
        mostrarResultado("No ingresaste ningún nombre.");
        return;
    }

    mostrarResultado(filtrarNombresConA(msj));
}

function reemplazarTexto() {
    const texto = prompt("Ingrese una cadena de texto:");
    const buscar = prompt("Ingrese la palabra que desea reemplazar:");
    const reemplazo = prompt("Ingrese la palabra de reemplazo:");

    const resultado = reemplazarPalabras(texto, buscar, reemplazo);
    mostrarResultado(resultado);
}

function cortarCadena() {
    const texto = prompt("Ingrese una cadena de texto:");
    const cantidad = prompt("Ingrese la cantidad de caracteres a mostrar:");

    const resultado = cortarTexto(texto, cantidad);
    mostrarResultado(resultado);
}

function generarStringConSeparador() {
    const texto = prompt("Ingrese una lista de elementos separados por coma:");
    if (!texto) {
        mostrarResultado("No ingresaste ningún texto.");
        return;
    }

    const resultado = stringConSeparador(texto);
    mostrarResultado(resultado);
}

function calcularTotalRecaudacion() {
    const msg = prompt("Ingrese los pedidos en formato nombre: total separados por coma:");
    if (!msg) {
        mostrarResultado("No ingresaste ningún pedido.");
        return;
    }

    const resultado = calcularRecaudacion(msg);
    mostrarResultado(resultado);
}
