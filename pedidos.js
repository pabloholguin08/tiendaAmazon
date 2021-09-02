let pedidos=[
    {
        id:1, nombre:"PS5", precio:750, peso:14.5, catidad:2, foto:"https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/ps5.jpg?raw=true",
    },
    {
        id:2, nombre:"Xbox Serie X", precio:700, peso:13.1, catidad:2, foto:"https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/xbox.jpg?raw=true",
    },
    {
        id:3, nombre:"Nintendo Switch", precio:409, peso:4.75, cantidad:1, foto:"https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/nintendo.jpg?raw=true",
    },
    {
        id:4, nombre:"Huion Kanvas 13", precio:239, peso:2, cantidad:3, foto:"https://github.com/pabloholguin08/fotoss/blob/main/tableta.jpg?raw=true",
    },
    {
        id:5, nombre:"Seagate Backup Disco Duro Externo", precio:60, peso:0.4, cantidad:10, foto:"https://github.com/pabloholguin08/fotoss/blob/main/discoDuro.jpg?raw=true",
    },
    {
        id:6, nombre:"Colores profesionales (48 colores)", precio:15, peso:1.23, cantidad:2, foto:"American Marxism", foto:"https://github.com/pabloholguin08/fotoss/blob/main/colores.jpg?raw=true",
    },
    {
        id:7, nombre:"American Marxism", precio:17, peso:0.9, cantidad:1, foto:"https://github.com/pabloholguin08/fotoss/blob/main/libro1.jpg?raw=truem",
    },
    {
        id:8, nombre:"Mochila Antirrobo", precio:40, peso:1.56, cantidad:5, foto:"https://github.com/pabloholguin08/fotoss/blob/main/mochila.jpg?raw=true", 
    },
    {
        id:9, nombre:"El Codigo Perdido", precio:8, peso: 1.3, cantidad:3, foto:"https://github.com/pabloholguin08/fotoss/blob/main/libro2.jpg?raw=true",
    },
    {
        id:10, nombre:"Godzilla vs King kong Blu-Ray", precio:20, peso:0.52, cantidad:1, foto:"https://github.com/pabloholguin08/fotoss/blob/main/pelicula1.jpg?raw=true",
    },
    {
        id:11, nombre:"AMD Ryzen 5 5600X 6 núcleos", precio:273, peso:0.17, cantidad:8, foto:"https://github.com/pabloholguin08/fotoss/blob/main/ryzen.jpg?raw=true",
    },
    {
        id:12, nombre:"Prismacolor 3620 Premier marcadores", precio:191, peso:3.83, cantidad:4, foto:"https://github.com/pabloholguin08/fotoss/blob/main/marcadores.jpg?raw=true",
    },
    {
        id:13, nombre:"Cojín para aliviar el dolor de coxis y nervio ciático", precio:40, peso:1.5, cantidad:3, foto:"https://github.com/pabloholguin08/fotoss/blob/main/cojin.jpg?raw=true",
    },
    {
        id:14, nombre:"Acer Chromebook laptop", precio:244, peso:2.62, cantidad:1, foto:"https://github.com/pabloholguin08/fotoss/blob/main/laptop.jpg?raw=true",
    },
    {
        id:15, nombre:"Spider-Man Trilogy Blu-ray", precio:30, peso:1, cantidad:2, foto:"https://github.com/pabloholguin08/fotoss/blob/main/pelicula2.jpg?raw=true",
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
    
    imagen.height="400";
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
    contenido2.textContent=`Cantidad: ${pedido.cantidad}`;

    let footer=document.createElement("div");
    footer.classList.add("card-footer");

    let boton=document.createElement("button");
    boton.classList.add("btn");
    boton.classList.add("btn-danger");
    boton.textContent='Eliminar';
    
    let icono=document.createElement("i");
    icono.classList.add("fas");
    icono.classList.add("fa-trash");
    icono.classList.add("ms-1");

    let boton2=document.createElement("button");
    boton2.classList.add("btn");
    boton2.classList.add("btn-dark");
    boton2.classList.add("ms-2");
    boton2.textContent='Editar';

    let icono2=document.createElement("i");
    icono2.classList.add("fas");
    icono2.classList.add("fa-pencil-alt");
    icono2.classList.add("ms-1");
    
    
    contenedorPadre.appendChild(columna);
    columna.appendChild(cabeza);
    cabeza.appendChild(imagen);
    cabeza.appendChild(torzo);
    cabeza.appendChild(footer);
    torzo.appendChild(titulo);
    torzo.appendChild(contenido);
    torzo.appendChild(contenido2);
    footer.appendChild(boton);
    footer.appendChild(boton2);
    boton.appendChild(icono);
    boton2.appendChild(icono2);

});