class Producto {
        constructor(id, nombre, precio) {
                this.id = parseInt(id);
                this.nombre = nombre;
                this.precio = parseFloat(precio);
        }
}
const producto1 = new Producto(1, "CAMISETA", 7500);
console.log(producto1);

const lugares = ['MADRID', 'IBIZA','BARCELONA'];

console.log(lugares[0]);

console.log(lugares[1]);

console.log(lugares[2]);

console.log(lugares.length);
//Recorrer lugares
for (let index = 0; index < lugares.length; index++) {
        console.log(lugares[index]);
}

console.log(lugares.toString());
//Añadir lugar
lugares.push('MADRID');
console.log(lugares.toString());

console.log(lugares.join("\n"));

const iva = lugares.concat(['PROVINCIA','RESTO DEL PAIS']);
console.log(iva);
console.log(lugares);

const productos = [];

productos.push(new Producto(1, "CAMISETA", 7500));
productos.push(new Producto(2, "SHORT", 4000));
productos.push(new Producto(3, "MEDIAS", 1500));
console.log(productos);
let salida = "PRODUCTOS DISPONIBLES: \n";

for (let index = 0; index < productos.length; index++) {
       salida += "Nº"+productos[index].id+
                 " NOMBRE "+productos[index].nombre+
                 " PRECIO $ "+productos[index].precio+"\n";
}
alert(salida);

// paso dos

// id solicitado
let idEntrada = prompt("INGRESAR EL ID DEL PRODUCTO");

let encontrado = productos.find(producto => producto.id == idEntrada);
console.log(encontrado);

if(encontrado != undefined){
        alert("SELECCIONADO "+encontrado.nombre);
}

let filtroPrecio = prompt("INGRESAR EL PRECIO MAXIMO");

let filtrados = productos.filter(producto => producto.precio < filtroPrecio);
console.log(filtrados);

if (filtrados.length > 0) {
        let salida2 = "FILTRADOS: \n";
        for (const producto of filtrados) {
                salida2 += "Nº" + producto.id +
                        " NOMBRE " + producto.nombre +
                        " PRECIO $ " + producto.precio + "\n";
        }
        alert(salida2);
}
