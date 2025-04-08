const productos = [
  {
    id: 1,
    imagen: "../assets/img/ropaimg/Jeans-negros-desgastados.webp",
    alt: "Jeans Negros Desgastados",
    titulo: "Jeans Negros Desgastados",
    descripcion:
      "Jeans negros con efecto desgastado, perfectos para un look urbano y moderno.",
    "precio": 2390.00,
    tallas: ["S", "M", "L", "XL"],
    categoria: { nombre: "Pantalones", id: "pantalon" },
  },
  {
    id: 2,
    imagen: "../assets/img/ropaimg/Deportivo-negro-scarryjpg.jpg",
    alt: "Pantalón Deportivo Negro",
    titulo: "Pantalón Deportivo Negro",
    descripcion:
      "Pantalón deportivo negro con ajuste cómodo y diseño moderno para un estilo relajado.",
    "precio": 2390.00,
    tallas: ["S", "M", "L", "XL"],
    categoria: { nombre: "Pantalones", id: "pantalon" },
  },
  {
    id: 3,
    imagen: "../assets/img/ropaimg/SHORT-BAGGY-AZUL.jpg",
    alt: "Short Baggy Azul",
    titulo: "Short Baggy Azul",
    descripcion:
      "Short baggy en tono azul con ajuste relajado y bolsillos funcionales.",
    precio: 2390.00,
    tallas: ["M", "L", "XL", "2XL"],
    categoria: { nombre: "Shorts", id: "short" },
  },
  {
    id: 4,
    imagen: "../assets/img/ropaimg/CARGO-GABARDINA-BEIGE-2.jpg",
    alt: "Pantalón Cargo Beige",
    titulo: "Pantalón Cargo Beige",
    descripcion:
      "Pantalón cargo de gabardina en color beige, con múltiples bolsillos y ajuste relajado.",
    precio: 2390.00,
    tallas: ["S", "M", "L", "XL"],
    categoria: { nombre: "Pantalones", id: "pantalon" },
  },
  {
    id: 5,
    imagen: "../assets/img/ropaimg/CARGO-GABARDINA-GRIS-3.jpg",
    alt: "Pantalón Cargo Gris",
    titulo: "Pantalón Cargo Gris",
    descripcion:
      "Pantalón cargo en color gris con tela resistente y un diseño versátil para cualquier ocasión.",
    precio: 2390.00,
    tallas: ["S", "M", "L", "XL"],
    categoria: { nombre: "Pantalones", id: "pantalon" },
  },
  {
    id: 6,
    imagen: "../assets/img/ropaimg/CARGO-GABARDINA-NEGRO-3.jpg",
    alt: "Pantalón Cargo Negro",
    titulo: "Pantalón Cargo Negro",
    descripcion:
      "Pantalón cargo negro, ideal para un estilo urbano con funcionalidad extra.",
    precio: 2390.00,
    tallas: ["S", "M", "L", "XL"],
    categoria: { nombre: "Pantalones", id: "pantalon" },
  },
  {
    id: 7,
    imagen: "../assets/img/ropaimg/deportivo-gris-scarry-3.jpg",
    alt: "Pantalón Deportivo Gris",
    titulo: "Pantalón Deportivo Gris",
    descripcion:
      "Pantalón deportivo gris con tela ligera y cómoda para entrenamientos o uso casual.",
    precio: 2390.00,
    tallas: ["S", "M", "L", "XL"],
    categoria: { nombre: "Pantalones", id: "pantalon" },
  },
  {
    id: 8,
    imagen: "../assets/img/ropaimg/Deportivo-negro-scarryjpg.jpg",
    alt: "Pantalón Deportivo Negro Scarry",
    titulo: "Pantalón Deportivo Negro Scarry",
    descripcion:
      "Diseño deportivo con ajuste perfecto y materiales transpirables.",
    precio: 2390.00,
    tallas: ["S", "M", "L", "XL"],
    categoria: { nombre: "Pantalones", id: "pantalon" },
  },
  {
    id: 9,
    imagen: "../assets/img/ropaimg/BUZO-MASTERPIECE-BLANCO-3.jpg",
    alt: "Buzo Masterpiece",
    titulo: "Buzo Blanco Masterpiece",
    descripcion:
      "Buzo Blanco oversized con interior afelpado, ideal para un look relajado y cómodo.",
    precio: 2390.00,
    tallas: ["S", "M", "L", "XL"],
    categoria: { nombre: "Buzos", id: "abrigo" },
  },
  {
    id: 10,
    imagen: "../assets/img/ropaimg/Pantalones-Deportivos-Verde.webp",
    alt: "Pantalón Deportivo Verde",
    titulo: "Pantalón Deportivo Verde",
    descripcion:
      "Pantalón deportivo en tono verde con cintura elástica para mayor confort.",
    precio: 2390.00,
    tallas: ["S", "M", "L", "XL"],
    categoria: { nombre: "Pantalones", id: "pantalon" },
  },
  {
    id: 11,
    imagen: "../assets/img/ropaimg/BAGGY-TOTAL-BLACK.jpg",
    alt: "Short Baggy Negro",
    titulo: "Short Baggy Negro",
    descripcion:
      "Short baggy en negro con ajuste relajado y bolsillos funcionales.",
    precio: 2390.00,
    tallas: ["S", "M", "L", "XL"],
    categoria: { nombre: "Shorts", id: "short" },
  },
  {
    id: 12,
    imagen: "../assets/img/ropaimg/SHORT-BAGGY.jpg",
    alt: "Short Baggy Clásico",
    titulo: "Short Baggy Clásico",
    descripcion:
      "Short baggy en un diseño clásico y cómodo, ideal para el verano.",
    precio: 2390.00,
    tallas: ["S", "M", "L", "XL"],
    categoria: { nombre: "Shorts", id: "short" },
  },
  {
    id: 13,
    imagen: "../assets/img/ropaimg/WATERPROOF-negro.jpg",
    alt: "Pantalón Impermeable Negro",
    titulo: "Pantalón Impermeable Negro",
    descripcion:
      "Pantalón impermeable ideal para climas húmedos, con diseño resistente y ligero.",
    precio: 2390.00,
    tallas: ["S", "M", "L", "XL"],
    categoria: { nombre: "Pantalones", id: "pantalon" },
  },
  {
    id: 14,
    imagen: "../assets/img/ropaimg/Buzo-Negro-Ancho.webp",
    alt: "Buzo Negro Ancho",
    titulo: "Buzo Oversized Negro",
    descripcion:
      "Buzo negro oversized con interior afelpado, ideal para un look relajado y cómodo.",
    precio: 2390.00,
    tallas: ["S", "M", "L", "XL"],
    categoria: { nombre: "Buzos", id: "abrigo" },
  },
  {
    id: 15,
    imagen: "../assets/img/ropaimg/Canguro-Nergo-Jean.jpg",
    alt: "Canguro Negro",
    titulo: "Canguro Negro Clásico",
    descripcion:
      "Canguro negro de algodón con bolsillo delantero y capucha ajustable.",
    precio: 2390.00,
    tallas: ["S", "M", "L", "XL"],
    categoria: { nombre: "Buzos", id: "abrigo" },
  },
  {
    id: 16,
    imagen: "../assets/img/ropaimg/Campera-Abrigo-Azul.webp",
    alt: "Campera Azul de Abrigo",
    titulo: "Campera Azul de Abrigo",
    descripcion:
      "Campera acolchonada en tono azul, perfecta para el invierno con cierre frontal y bolsillos laterales.",
    precio: 2390.00,
    tallas: ["S", "M", "L", "XL"],
    categoria: { nombre: "Camperas", id: "abrigo" },
  },
  {
    id: 17,
    imagen: "../assets/img/ropaimg/campera-automovilistica.jpg",
    alt: "Campera Automovilística",
    titulo: "Campera Estilo Automovilístico",
    descripcion:
      "Campera con diseño racing, confeccionada en materiales resistentes y modernos.",
    precio: 2390.00,
    tallas: ["S", "M", "L", "XL"],
    categoria: { nombre: "Camperas", id: "abrigo" },
  },
  {
    id: 18,
    imagen: "../assets/img/ropaimg/CAMPERA-BOXY-GRIS-5.jpg",
    alt: "Campera Boxy Gris",
    titulo: "Campera Boxy Gris",
    descripcion: "Campera boxy en tono gris con corte amplio y estilo moderno.",
    precio: 2390.00,
    tallas: ["S", "M", "L", "XL"],
    categoria: { nombre: "Camperas", id: "abrigo" },
  },
  {
    id: 19,
    imagen: "../assets/img/ropaimg/CamperaImpermeable-Beige.webp",
    alt: "Campera Impermeable Beige",
    titulo: "Campera Impermeable Beige",
    descripcion:
      "Campera impermeable en tono beige, ideal para días lluviosos con diseño ligero.",
    precio: 2390.00,
    tallas: ["S", "M", "L", "XL"],
    categoria: { nombre: "Camperas", id: "abrigo" },
  },
  {
    id: 20,
    imagen: "../assets/img/ropaimg/PANA-campera.jpg",
    alt: "Campera de Pana",
    titulo: "Campera de Pana",
    descripcion:
      "Campera de pana con forro interior, perfecta para un estilo vintage y abrigado.",
    precio: 2390.00,
    tallas: ["S", "M", "L", "XL"],
    categoria: { nombre: "Camperas", id: "abrigo" },
  },
  {
    id: 21,
    imagen: "../assets/img/ropaimg/ROMPEVIENTOS-ANORAK-VIOLETA.jpg",
    alt: "Rompevientos Anorak Violeta",
    titulo: "Rompevientos Anorak Violeta",
    descripcion:
      "Rompevientos ligero en color violeta, ideal para protegerse del viento con estilo.",
    precio: 2390.00,
    tallas: ["S", "M", "L", "XL"],
    categoria: { nombre: "Camperas", id: "abrigo" },
  },
  {
    id: 22,
    imagen: "../assets/img/ropaimg/remera-Verde-arbol.png",
    alt: "Remera Verde Árbol",
    titulo: "Remera Verde con Estampado de Árbol",
    descripcion: "Remera de algodón en color verde con un estampado de árbol en el frente. Cómoda y fresca para cualquier ocasión.",
    precio: 2390.00,
    tallas: ["S", "M", "L", "XL"],
    categoria: { nombre: "Remeras", id: "remera" }
},
{
    id: 23,
    imagen: "../assets/img/ropaimg/RemeraVernal-Negrawebp.webp",
    alt: "Remera Negra Vernal",
    titulo: "Remera Negra Vernal",
    descripcion: "Remera negra de diseño minimalista con ajuste regular y tela suave. Perfecta para un look casual.",
    precio: 2390.00,
    tallas: ["S", "M", "L", "XL"],
    categoria: { nombre: "Remeras", id: "remera" }
}
];




//tienda.html Catalogo

if (window.location.pathname.includes('tienda.html')) {

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria")
let botonesAgregar = document.querySelectorAll(".boton-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        const div = document.createElement("div");

        div.classList.add("col-md-3", "col-12", "mb-4");
        div.innerHTML = `
            <a href="./detalles.html?id=${producto.id}">
                <div class="card h-100">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.alt}">
                    <div class="card-body">
                        <h5 class="card-title text-wrap">${producto.titulo}</h5>
                        <p class="card-text">$${producto.precio.toFixed(2)}</p>
                        <div class="sizes">
                            ${producto.tallas.map(talla => {
                                const unavailableClass = talla === "L" ? "unavailable" : ""; 
                                return `<span class="size ${unavailableClass}">${talla}</span>`;
                            }).join("")}
                        </div>
                        </a>
                        <div class = "text-center d-block">
                        <button class = "boton-agregar" id = "${producto.id}">Agregar</button>
                        </div>
                    </div>
                </div>
        `;

       contenedorProductos.append(div);
    });

    actualizarBotonesAgregar();
};



cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
        cargarProductos(productosBoton);
        }else {
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".boton-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito

let productosEnCarritoLs = localStorage.getItem("productos-en-carrito");

if(productosEnCarritoLs){
  productosEnCarrito = JSON.parse(productosEnCarritoLs);
  actualizarNumerito();
}else{
  productosEnCarrito = [];
}


function agregarAlCarrito(e){
    const idBoton = parseInt(e.currentTarget.id);
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
       const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
       productosEnCarrito[index].cantidad++;
    }else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}

}



//DETALLES.HTML PRODUCTO


if (window.location.pathname.includes('detalles.html')) {

let productosEnCarrito;

let productosEnCarritoLs = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLs) {
  productosEnCarrito = JSON.parse(productosEnCarritoLs);
} else {
  productosEnCarrito = [];
}

// Obtener el parámetro 'id' de la URL
const urlParams = new URLSearchParams(window.location.search);
const productoId = parseInt(urlParams.get('id'));

// Buscar el producto en el array 'productos'
const producto = productos.find(p => p.id === productoId);
let botonAgregar = document.querySelector("#boton-añadir-carrito");

botonAgregar.addEventListener("click", (e) => agregarAlCarrito(e.currentTarget));

function agregarAlCarrito(e) {
  if (producto) {
    // Verificar si el producto ya está en el carrito
    const index = productosEnCarrito.findIndex(p => p.id === producto.id);

    if (index !== -1) {
      // Si el producto ya está en el carrito, aumentar la cantidad
      productosEnCarrito[index].cantidad++;
    } else {
      // Si no está en el carrito, agregarlo con cantidad 1
      const productoAgregado = { ...producto, cantidad: 1 }; // Crear una copia del producto
      productosEnCarrito.push(productoAgregado);
    }
    // Guardar el carrito actualizado en el localStorage
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
  }
}


// Función para cargar los detalles del producto en detalles.html
function cargarDetalles() {
  // Si se encuentra el producto, llenar los detalles
  if (producto) {
    document.getElementById('producto-imagen').src = producto.imagen;
    document.getElementById('producto-imagen').alt = producto.alt;
    document.getElementById('producto-titulo').textContent = producto.titulo;
    document.getElementById('producto-descripcion').textContent = producto.descripcion;
    document.getElementById('producto-precio').textContent = `$${producto.precio.toFixed(2)}`;
    document.getElementById('producto-tallas').textContent = `Tallas disponibles: ${producto.tallas.join(', ')}`;
    document.getElementById('producto-categoria').textContent = `#${producto.categoria.nombre}`;
  } else {
    // Si no se encuentra el producto, mostrar un mensaje de error
    document.getElementById('producto-detalle').innerHTML = '<p>Producto no encontrado.</p>';
  }
};

// Si estamos en la página de detalles, ejecutar la función para cargar los detalles

  cargarDetalles();
}