const productos = [
    {
        id: 1,
        imagen: "../assets/img/ropaimg/Jeans-negros-desgastados.png",
        alt: "Jeans Negros",
        titulo: "Camadro Jean Facho FO",
        descripcion: "El Drop de tus Sueños",
        precio: "$2,690.00",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 2,
        imagen: "../assets/img/ropaimg/Deportivo-negro-scarryjpg.jpg",
        alt: "Deportivo Negro",
        titulo: "Oxford Jean",
        descripcion: "El Drop de tus Sueños",
        precio: "$2,390.00",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 3,
        imagen: "../assets/img/ropaimg/SHORT-BAGGY-AZUL.jpg",
        alt: "Short Baggy Azul",
        titulo: "Drafting Jean",
        descripcion: "El Drop de tus Sueños",
        precio: "$2,390.00",
        tallas: ["M", "L", "XL", "2XL"]
    },
    {
        id: 4,
        imagen: "../assets/img/ropaimg/Canguro-Negro-Jean.jpg",
        alt: "Canguro Negro Jean",
        titulo: "Canguro Negro Jean",
        descripcion: "El Drop de tus Sueños",
        precio: "$2,390.00",
        tallas: ["S", "M", "L", "XL"]
    }
];

// Obtener el ID del producto desde la URL
const urlParams = new URLSearchParams(window.location.search);
const idProducto = urlParams.get('id');

// Buscar el producto por ID
const producto = productos.find(p => p.id === parseInt(idProducto));

// Mostrar los detalles del producto
if (producto) {
    document.querySelector('.producto-titulo').textContent = producto.titulo;
    document.querySelector('.producto-imagen').src = producto.imagen;
    document.querySelector('.producto-imagen').alt = producto.alt;
    document.querySelector('.producto-descripcion').textContent = producto.descripcion;
    document.querySelector('.producto-precio').textContent = producto.precio;

    const tallasDiv = document.querySelector('.producto-tallas');
    producto.tallas.forEach(talla => {
        const tallaSpan = document.createElement('span');
        tallaSpan.classList.add('size');
        tallaSpan.textContent = talla;
        tallasDiv.appendChild(tallaSpan);
    });
} else {
    // Si no se encuentra el producto, puedes mostrar un mensaje de error
    document.querySelector('.container').innerHTML = '<h2>Producto no encontrado</h2>';
}
