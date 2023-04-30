const ulContenedorPadre = document.getElementById("ListaDeProductos");
const listaDeProductos = ['GASEOSA', 'AGUA', 'CERVEZA', 'FERNET', 'GIN', 'VODKA', 'VINO'];
let carritoCompras = [], confirmacion = true;

agregarListado(listaDeProductos, ulContenedorPadre);

const getCarritosCompras = () => {
    if (carritoCompras.length !== 0) {
        alert(`Listado de Compras: \n ${carritoCompras.join('\n')}`);
    } else {
        alert("error: no hay productos ingresados....");
    }
}

function agregarProducto() {
    while (confirmacion) {
        let producto = prompt(`¿Que producto desea agregar?`).toUpperCase();
        if (listaDeProductos.includes(producto) && producto !== null) {
            carritoCompras.push(producto);
            alert('se agrego el producto...');
        } else {
            alert('no se encontro el producto...');
        }
        confirmacion = confirm('¿Desea Agregar algun producto mas?');
    }
    confirmacion = true;
}


const buscarProducto = () => {
    while (confirmacion) {
        let producto = prompt(`¿Que producto desea buscar en el carrito de compras?`).toUpperCase();
        if (producto !== null) {
            const busqueda = carritoCompras.find(element => element == producto);
            if (busqueda !== undefined) {
                alert(`Su producto es: ${busqueda}`);
            } else {
                alert("No se encontro su producto....");
            }
        } else {
            alert("Ingrese una palabra correcta...");
        }
        confirmacion = confirm('¿Desea hacer otra consulta?');
    }
    confirmacion = true;
}

const filtrarProducto = () => {
    while (confirmacion) {
        let producto = prompt(`¿Que producto desea buscar en la lista de productos?`).toUpperCase();
        if (producto !== null) {
            let filtro = listaDeProductos.filter(element => element.includes(producto));
            if (filtro.length !== 0) {
                alert(filtro)
            } else {
                alert("No se encontro coincidencia en el listado de productos....");
            }
        } else {
            alert("Ingrese una palabra correcta...");
        }
        confirmacion = confirm('¿Desea hacer otra consulta?');
    }
    confirmacion = true;
};
const eliminarProducto = () => {
    while (confirmacion) {
        let producto = prompt(`¿Que producto desea eliminar del carrito de compras?`).toUpperCase();
        if (producto !== null) {
            if (carritoCompras.includes(producto)) {
                carritoCompras = carritoCompras.filter(element => element !== producto);
            } else {
                alert("no se encontro su producto");
            }
        } else {
            alert("Ingrese una palabra correcta...");
        }
        confirmacion = confirm('¿Desea eliminar otro producto?');
    }
    getCarritosCompras();
    confirmacion = true;
};

function agregarListado(array, contenerdor) {

    array.forEach(producto => {
        let li = document.createElement("li");
        li.innerText = producto;
        li.id = producto;
        contenerdor.appendChild(li);
    });

}
