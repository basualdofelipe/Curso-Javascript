
const body = document.body
const h1 = document.createElement("h1")
const div = document.createElement("div")
const header = document.querySelector("#header")
const lista = document.querySelector("#juegos")


class Juego{
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = parseFloat(precio).toFixed(2);
    }
    masIva(){
        return (this.precio * 0.21).toFixed(2);
    }
    masImpPais(){
        return (this.precio * 0.08).toFixed(2);
    }
    masImpGanancia(){
        return (this.precio * 0.35).toFixed(2);
    }
    impTotal(){
        return (this.precio * (1 + 0.21 + 0.08 + 0.35)).toFixed(2);
    }
}


const listaJuegos = []
listaJuegos.push(new Juego("Mario Kart","1500"))
listaJuegos.push(new Juego("Super Smash","1250"))
listaJuegos.push(new Juego("Donkey Kong","900"))
listaJuegos.push(new Juego("Kirby","1360"))
listaJuegos.push(new Juego("Mario Party","999.58"))
listaJuegos.push(new Juego("Bomber Man","1300"))

let listaPrecios = []

function resetearLista(){
    listaPrecios = listaJuegos.map((el) => {
        return {
            nombre: el.nombre,
            precio: el.precio,
            iva: el.masIva(),
            ganancias: el.masImpGanancia(),
            impPais: el.masImpPais(),
            total: el.impTotal()
        }
    })
}

resetearLista()

//DOMinating the website

header.innerText = "Bienvenido a la calculadora de juegos de Steam\nSi quiere agregar un juego escriba la fución nuevoJuego() en la consola"
    
listaPrecios.forEach(function(e){
    appendear(e)
})

function appendear(e){
    let nombre= document.createElement("li");
    nombre.className = e.nombre;
    nombre.innerText = e.nombre;
    lista.append(nombre)
    
    let datos = document.createElement("ul")
    nombre.append(datos)

    let precio = document.createElement("li")
    precio.innerText = "precio: $" + e.precio
    datos.append(precio)

    let iva = document.createElement("li")
    iva.innerText = "iva: $" + e.iva
    datos.append(iva)

    let ganancias = document.createElement("li")
    ganancias.innerText = "ganancias: $" + e.ganancias
    datos.append(ganancias)

    let impPais = document.createElement("li")
    impPais.innerText = "impuesto país: $" + e.impPais
    datos.append(impPais)

    let total = document.createElement("li")
    total.innerText = "total: $" + e.total
    datos.append(total)
}
    



// CALCULADORA DE JUEGOS CON IMPUESTOS

function nuevoJuego(){
    let nombre = prompt("escriba el nombre")
    let precio = parseFloat(prompt("escriba el precio"))
    listaJuegos.push(new Juego(nombre,precio))
    resetearLista()
    mostrarJuego(listaPrecios[listaPrecios.length-1])
}

function mostrarJuego(e){
    appendear(e)
}
