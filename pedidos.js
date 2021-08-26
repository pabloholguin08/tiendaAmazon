let pedidos=[
    {
        id:1,
        nombre:"PS5",
        precio:750,
        peso:14.5,
        catidad:2,
        foto:"https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/ps5.jpg?raw=true",
    },
    {
        id:2,
        nombre:"Xbox",
        precio:750,
        peso:14.5,
        catidad:2,
        foto:"https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/xbox.jpg?raw=true",
    }
];

let contenedorPadre=document.getElementById("padre");
pedidos.forEach(function(pedido){
    let columna=document.createElement("div");
    columna.classList.add("col");

    let cabeza=document.createElement("div");
    cabeza.classList.add("card");
    cabeza.classList.add("h-100");

    let imagen=document.createElement("img");
    imagen.classList.add("card-img-top");
    imagen.src=pedido.foto;

    let torzo=document.createElement("div");
    torzo.classList.add("card-body");

    let titulo=document.createElement("h5");
    titulo.classList.add("card-title");
    titulo.textContent=`${pedido.nombre}`;
    

    let contenido=document.createElement("p");
    contenido.classList.add("card-text");
    contenido.textContent=`Precio: ${pedido.precio}`;

    let contenido2=document.createElement("p");
    contenido2.classList.add("card-text");
    contenido2.textContent=`Cantidad: ${pedido.catidad}`;

    contenedorPadre.appendChild(columna);
    columna.appendChild(cabeza);
    cabeza.appendChild(imagen);
    cabeza.appendChild(torzo);
    torzo.appendChild(titulo);
    torzo.appendChild(contenido);
    torzo.appendChild(contenido2);

});