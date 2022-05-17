
const body = document.body
const h1 = document.createElement("h1")
const div = document.createElement("div")
const header = document.querySelector("#header")
const lista = document.querySelector("#juegos")
const titulo = document.querySelector("#titulo")
const precio = document.querySelector("#precio")
const iva = document.querySelector("#iva")
const ganancias = document.querySelector("#ganancias")
const impPais = document.querySelector("#imp-pais")
const total = document.querySelector("#total")

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



header.innerText = "Bienvenido a la calculadora de juegos de Steam"




listaPrecios.forEach(function(e){
    let li= document.createElement("li");
    li.innerText = e.nombre;
    lista.append(li)
})



// CALCULADORA DE JUEGOS CON IMPUESTOS

function nuevoJuego(){
    let nombre = prompt("escriba el nombre")
    let precio = parseFloat(prompt("escriba el precio"))
    listaJuegos.push(new Juego(nombre,precio))
    let li= document.createElement("li");
    li.innerText = nombre;
    lista.append(li)
    resetearLista()
}

function listarJuegos(){
    let elec = prompt(listadoJuegosMenu)
     alert(
        "Título: " + listaPrecios[elec-1].nombre + "\n" +
        "Precio: $" + listaPrecios[elec-1].precio + "\n" +
        "Iva: $" + listaPrecios[elec-1].iva + "\n" +
        "Ganancias: $" + listaPrecios[elec-1].ganancias + "\n" +
        "Impuesto País: $" + listaPrecios[elec-1].impPais + "\n" +
        "Total: $" + listaPrecios[elec-1].total);
};

function buscarJuego(){
    let elec = prompt("Escriba el nombre del juego")
    const resultado = listaPrecios.find((el) => el.nombre === elec);
    alert (
        "Título: " + resultado.nombre + "\n" +
        "Precio: $" + resultado.precio + "\n" +
        "Iva: $" + resultado.iva + "\n" +
        "Ganancias: $" + resultado.ganancias + "\n" +
        "Impuesto País: $" + resultado.impPais + "\n" +
        "Total: $" + resultado.total);
}


function menu(){
    resetearLista()
    let opcion = prompt ("Bienvenido a la calculadora de impuestos\n1 - Ver en Lista\n2 - Agregar un Juego\n3 - Buscar Juego por Nombre")
    switch(opcion){
        case "1":
            listarJuegos();
            menu();
            break;
        case "2":
            nuevoJuego();
            menu();
            break;
        case "3":
            buscarJuego();
            menu();
            break;
        case "exit":
            break;
        default:
            alert("opción incorrecta");
            menu();
        
    }

}