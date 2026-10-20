// Calculadora del valor total de un alquiler

function calculoAlquiler (valorMensual, duracionContrato) {
    let resultado = 0
    resultado = valorMensual*duracionContrato
    return resultado 
}

function calculoIngreso (valorMensual, duracionContrato, porcentajeInmobiliaria){
    let resultadoGastos = 0
    resultadoGastos = valorMensual*duracionContrato*porcentajeInmobiliaria
    return resultadoGastos
}

function calculoComision (gastosDeIngreso) {
    let total = 0
    total = gastosDeIngreso * 0.5
    return total
}

const saludar = (nombreInquilino) => {
    return "Hola " + nombreInquilino +"! Vamos a calcular el valor total de tu contrato de alquiler y los gastos de ingreso"
}



let nombreInquilino = prompt("Nombre completo del inquilino: ")

alert(saludar(nombreInquilino))

let valorMensual = Number(prompt("Valor mensual del alquiler sin puntos ni signos: "))

while(isNaN(valorMensual) || valorMensual <=0){
    alert("Ingresa un numero valido")
    valorMensual = Number(prompt("Valor mensual del alquiler sin puntos ni signos: "))
}

let duracionContrato = Number(prompt("Cuantos meses dura tu contrato?: "))

while (isNaN(duracionContrato) || duracionContrato <=0){
    alert("Ingresa cantidad de meses valida")
    duracionContrato = Number(prompt("Valor mensual del alquiler sin puntos ni signos: "))
}

//Porcentaje de las inmobiliarias de gasto de ingreso
const porcentajeInmobiliaria = 0.04

let ingreso = calculoIngreso(valorMensual, duracionContrato, porcentajeInmobiliaria)
let comisionInmobiliaria = calculoComision(ingreso)


console.log("El valor total de tu contrato es de " + "$" + calculoAlquiler(valorMensual, duracionContrato))
console.log("Los gastos de ingreso para tu alquiler son de " + "$" + calculoIngreso(valorMensual, duracionContrato, porcentajeInmobiliaria))
console.log("La comision por parte de la inmobiliaria es de " + "$" + comisionInmobiliaria)

if(valorMensual<=500000) { 
    console.log("Tu alquiler tiene un valor bajo") 
    } else if (valorMensual <=700000) { 
        console.log("El valor de tu alquiler es un valor medio") 
    } 
    else { 
        console.log("Tu alquiler tiene un valor elevado") 
    }


// PRE ENTREGA 4: Checklist para mudanza


function mostrarChecklist() {
    for (let producto of checklistMudanza){
        console.log(producto)
        }
}

const checklistMudanza = ["cama", "colchon", "heladera", "mesa", "sillas", "sillon"]
    
let agregarALista = prompt(checklistMudanza + ", esta es una lista de cosas necesarias para tu mudanza queres agregar algo a la lista? Escribir no en caso de querer finalizar")

while(agregarALista != "no"){
    checklistMudanza.push(agregarALista)  
    agregarALista = prompt("Deseas agregar algo mas a la lista? Escribir no en caso de querer finalizar")
    }
    

let recordatorio = prompt("Queres verificar si agregaste algun producto? Escribi el nombre del producto o escribi no para salir") 

while(recordatorio != "no") { 
    if (checklistMudanza.includes(recordatorio)) { 
        console.log(recordatorio + " esta en tu lista de mudanza") 
    } else { 
        console.log(recordatorio + " no esta en tu lista de mudanza") 
    } 
    recordatorio = prompt("Queres verificar si agregaste otro producto? Escribi no en caso de querer salir") 
}

let productoPrioridad = prompt("Alguno de los productos que necesitas es urgente? Escribi cual, escribi no en caso de querer salir")

while (productoPrioridad != "no"){
    checklistMudanza.unshift(productoPrioridad)
    productoPrioridad = prompt("Algun otro producto que sea prioridad? Escribir no para salir" )
}

console.log("Lista de productos: ")
mostrarChecklist()