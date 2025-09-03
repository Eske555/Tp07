function calcularEdad(fecha)
{
    const hoy = new Date()
    new Date(fecha)
    let edad = año.getFullYear() - fecha.getFullYear()
    const mes = mes.getMonth() - fecha.getMonth()

    if(mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())){
        edad--
    }
    return edad
}
function saludar(mensaje){
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `${mensaje}`
}