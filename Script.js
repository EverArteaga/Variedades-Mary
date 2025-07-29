// script.js

// Array de productos de ejemplo
const productos = [
    {
        id: 1,
        nombre: "Dorsay Class",
        descripcion: "90 ml", // Puedes mantener el precio aquí si lo necesitas para otras lógicas, solo no se mostrará.
        imagen: "Dorsay.JPEG"
    },
    {
        id: 2,
        nombre: "Men",
        descripcion: "200 ml",
        imagen: "MEN.JPEG"
    },
    {
        id: 3,
        nombre: "Liasson",
        descripcion: "50 ml",
        imagen: "Liasson.JPEG"
    },
    {
        id: 4,
        nombre: "Dancing",
        descripcion: "90 ml",
        imagen: "Dancing.JPEG"
    },
    {
        id: 5,
        nombre: "Mithyka",
        descripcion: "50 ml",
        imagen: "Mithyka.JPEG"
    },
    {
        id: 6,
        nombre: "Bleu Femmu Capri",
        descripcion: "50 ml",   
        imagen:"Bleu Femmu Capri.JPEG"
    },
    {
        id: 7,
        nombre: "Bleu Intense",
        descripcion: "100 ml",
        imagen:"Bleu Intense.JPEG"
    },
     {
        id: 8,
        nombre: "Bleu Night",
        descripcion: "100 ml",
        imagen:"Bleu Night.JPEG"
    },
     {
        id: 9,
        nombre: "Cardigan",
        descripcion: "90 ml",
        imagen:"Cardigan.JPEG"
    },
     {
        id: 10,
        nombre: "Dorsay",
        descripcion: "90 ml",
        imagen:"Colonia.JPEG"
    },
     {
        id: 11,
        nombre: "Expression",
        descripcion: "50 ml",
        imagen:"Expression.JPEG"
    },
     {
        id: 12,
        nombre: "Mini Chics",
        descripcion: "120 ml",
        imagen:"Mini Chics.JPEG"
    },
    {
        id: 13,
        nombre: "New Cool",
        descripcion: "75 ml",
        imagen:"New Cool.JPEG"
    },
    {
        id: 14,
        nombre: "Nitro",
        descripcion: "100 ml",
        imagen:"Nitro.JPEG"
    },
    {
        id: 15,
        nombre: "Pack Mithyca",
        descripcion: "50 ml / 130 ml",
        imagen:"Pack Mithyka.JPEG"
    },
    {
        id: 16,
        nombre: "Prints",
        descripcion: "30 ml",
        imagen:"Prints.JPEG"
    },
    {
        id: 17,
        nombre: "Splash refrescantes",
        descripcion: "200 ml",
        imagen:"Splash refrescantes.JPEG"
    },
    {
        id: 18,
        nombre: "Splash Universe",
        descripcion: "200 ml",
        imagen:"Splash Universe.JPEG"
    },
    {
        id: 19,
        nombre: "Talco",
        descripcion: "230 gr",
        imagen:"Talco.JPEG"
    },
    {
        id: 20,
        nombre: "Vanilla",
        descripcion: "50 ml",
        imagen:"Vanilla.JPEG"
    },
    {
        id: 21,
        nombre: "Vibranza",
        descripcion: "45 ml",
        imagen:"Vibranza.JPEG"
    }, 
    {
        id: 22,
        nombre: "sweet black",
        descripcion: "50 ml",
        imagen:"Sweet black.JPEG"
    }, 
];

// Función para cargar los productos en el HTML
function cargarProductos() {
    const productosGrid = document.querySelector('.productos-grid');
    productosGrid.innerHTML = ''; // Limpiar cualquier contenido existente

    productos.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('producto-card'); // Añade la clase CSS para el estilo de la tarjeta

        card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            `;
        productosGrid.appendChild(card);
    });
}

// Llama a la función cargarProductos cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', cargarProductos);

// Puedes añadir aquí más funciones de JavaScript si las necesitas en el futuro