const resultado = document.getElementById("resultado");

function calculadoraEdad(){
    const nombre = prompt("Ingresa tu nombre:")
    const fecha = prompt("Ingresa tu fecha de nacimineto:")
    const edad = calcularEdad(fecha)

    const mensaje = `Hola ${nombre}, tenes ${edad} años`
    console.log(mensaje)
    saludar(mensaje)
}