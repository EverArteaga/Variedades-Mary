// script.js

// Array de productos de ejemplo
const productos = [
    {
        id: 1,
        nombre: "Dorsay Class",
        descripcion: "90 ml", // Puedes mantener el precio aquí si lo necesitas para otras lógicas, solo no se mostrará.
        imagen: "Dorsay.jpeg"
    },
    {
        id: 2,
        nombre: "Men",
        descripcion: "200 ml",
        imagen: "MEN.jpeg"
    },
    {
        id: 3,
        nombre: "Liasson",
        descripcion: "50 ml",
        imagen: "Liasson.jpeg"
    },
    {
        id: 4,
        nombre: "Dancing",
        descripcion: "90 ml",
        imagen: "Dancing.jpeg"
    },
    {
        id: 5,
        nombre: "Mithyka",
        descripcion: "50 ml",
        imagen: "Mithyka.jpeg"
    },
    {
        id: 6,
        nombre: "Bleu Femmu Capri",
        descripcion: "50 ml",   
        imagen:"Bleu-Femmu-Capri.jpeg"
    },
    {
        id: 7,
        nombre: "Bleu Intense",
        descripcion: "100 ml",
        imagen:"Bleu-Intense.jpeg"
    },
     {
        id: 8,
        nombre: "Bleu Night",
        descripcion: "100 ml",
        imagen:"Bleu-Night.jpeg"
    },
     {
        id: 9,
        nombre: "Cardigan",
        descripcion: "90 ml",
        imagen:"Cardigan.jpeg"
    },
     {
        id: 10,
        nombre: "Dorsay",
        descripcion: "90 ml",
        imagen:"Colonia.jpeg"
    },
     {
        id: 11,
        nombre: "Expression",
        descripcion: "50 ml",
        imagen:"Expression.jpeg"
    },
     {
        id: 12,
        nombre: "Mini Chics",
        descripcion: "120 ml",
        imagen:"Mini-Chics.jpeg"
    },
    {
        id: 13,
        nombre: "New Cool",
        descripcion: "75 ml",
        imagen:"New-Cool.jpeg"
    },
    {
        id: 14,
        nombre: "Nitro",
        descripcion: "100 ml",
        imagen:"Nitro.jpeg"
    },
    {
        id: 15,
        nombre: "Pack Mithyca",
        descripcion: "50 ml / 130 ml",
        imagen:"Pack-Mithyka.jpeg"
    },
    {
        id: 16,
        nombre: "Prints",
        descripcion: "30 ml",
        imagen:"Prints.jpeg"
    },
    {
        id: 17,
        nombre: "Splash refrescantes",
        descripcion: "200 ml",
        imagen:"Splash-refrescantes.jpeg"
    },
    {
        id: 18,
        nombre: "Splash Universe",
        descripcion: "200 ml",
        imagen:"Splash-Universe.jpeg"
    },
    {
        id: 19,
        nombre: "Talco",
        descripcion: "230 gr",
        imagen:"Talco.jpeg"
    },
    {
        id: 20,
        nombre: "Vanilla",
        descripcion: "50 ml",
        imagen:"Vanilla.jpeg"
    },
    {
        id: 21,
        nombre: "Vibranza",
        descripcion: "45 ml",
        imagen:"Vibranza.jpeg"
    }, 
    {
        id: 22,
        nombre: "sweet black",
        descripcion: "50 ml",
        imagen:"Sweet-black.jpeg"
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

