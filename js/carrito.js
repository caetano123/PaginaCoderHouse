let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoTable = document.querySelector("#carrito-tabla");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
const contendorTotal = document.querySelector("#total");

const botonComprar = document.querySelector("#boton-comprar");

let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

function cargarProductosCarrito() {
  if (productosEnCarrito && productosEnCarrito.length > 0) {

    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoTable.classList.remove("disabled");
    contenedorCarritoComprado.classList.add("disabled");

    contenedorCarritoProductos.innerHTML = "";

    productosEnCarrito.forEach((producto) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="d-flex align-items-center">
                    <!-- Botón para eliminar -->
                    <button id = "${
                      producto.id
                    }" class="btn btn-outline-danger me-2 p-1 carrito-producto-eliminar">
                      <i class="fa-solid fa-xmark"></i>
                    </button>
                    <img src="${producto.imagen}" alt="${
        producto.alt
      }" class="me-2" width="50">
                    <span>${producto.titulo}</span>
                  </td>
                  <td>
                    <del class="text-muted">${producto.precio}</del> <br>
                    <span class="fw-bold">${producto.precio}</span>
                  </td>
                  <td>
                    <input type="number" value="${
                      producto.cantidad
                    }" min="1" class="form-control w-50 mx-auto">
                  </td>
                  <td>
                    <span class="fw-bold">$${
                      producto.precio * producto.cantidad
                    }</span> <br>
                    <span class="text-success">Has ahorrado $403,50</span>
                  </td>
        `;

      contenedorCarritoProductos.append(tr);
    });
  } else {
    contenedorCarritoVacio.classList.remove("disabled");
    contenedorCarritoTable.classList.add("disabled");
    contenedorCarritoComprado.classList.add("disabled");
  }

  actualizarBotonesEliminar();
  actualizarTotal();
}

cargarProductosCarrito();
actualizarBotonesEliminar();

function actualizarBotonesEliminar() {
  botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

  botonesEliminar.forEach((boton) => {
    boton.addEventListener("click", eliminarDelCarrito);
  });
}


function eliminarDelCarrito(e) {
  const idBoton = parseInt(e.currentTarget.id);
  const productoEliminado = productosEnCarrito.find(producto => producto.id === idBoton);
  
  console.log(productosEnCarrito);
  const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
  productosEnCarrito.splice(index, 1);
  cargarProductosCarrito();

  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

}



function actualizarTotal() {
  const totalContado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
 contendorTotal.innerText = `$${totalContado}`;
}

botonComprar.addEventListener("click", comprarCarrito);

function comprarCarrito(){
  productosEnCarrito.length = 0;
  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

  contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoTable.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");

}
