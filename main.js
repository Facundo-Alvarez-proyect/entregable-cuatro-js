let miCarrito = prompt("Que productos deseas agregar? Escribi salir cuando quieras terminar")

const listaSuper = []

while (miCarrito != "salir") {
    listaSuper.push(miCarrito)
    miCarrito = prompt("Deseas agregar otro producto? Escribir salir para finalizar")
}

console.log("Mi carrito", listaSuper)

let productoUrgente = prompt("Hay algun producto que necesites comprar con urgencia? Escribir salir en caso que no sea necesario")

while(productoUrgente != "salir"){
    listaSuper.unshift(productoUrgente)
    productoUrgente = prompt("Necesitas darle prioridad a otro producto? Escribir salir en caso que no sea necesario")
}

for(let productos of listaSuper) {
    console.log("Mis productos", listaSuper)
}

let recordatorio = prompt("Escribi el producto que queres saber si agregaste a la lista, en caso de no querer hacerlo, escribi salir")

while (recordatorio != "salir") {

    let existe = listaSuper.includes(recordatorio)
    if(existe) {
        console.log(recordatorio + ", " + "esta añadido a tu carrito de compras")
    } else {
        console.log(recordatorio + ", " + "no esta añadido a tu carrito de compras")
    }
    recordatorio = prompt("Algun otro producto que quieras saber si agregaste? En caso de no querer hacerlo, escribi salir")
}