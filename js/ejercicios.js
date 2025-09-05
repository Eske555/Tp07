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
    const nombre = prompt("Ingrese el nombre de la ciudad:");
    const fechaFundacion = prompt("Ingrese la fecha de fundación (AAAA-MM-DD):");
    const poblacion = prompt("Ingrese la población de la ciudad:");
    const extension = prompt("Ingrese la extensión en km²:");

    if (!nombre || !fechaFundacion || !validarNumero(poblacion) || !validarNumero(extension)) {
        mostrarResultado("Datos inválidos. Por favor ingrese todos los valores correctamente.");
        return;
    }
    const ciudad = crearCiudad(nombre, fechaFundacion, poblacion, extension);
    const resultado = recorrerObjeto(ciudad);
    mostrarResultado(resultado);
    console.log("Objeto ciudad:", ciudad);
}

