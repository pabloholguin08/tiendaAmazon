let nombreProducto;
let precioProducto;
let pesoProducto;
let fotoProducto;

let moneda=true;

let boton=document.getElementById("boton");
let botonLimpiar=document.getElementById("botonLimpiar");
let botonCop=document.getElementById("cop");
let botonUsd=document.getElementById("usd");

boton.addEventListener("click", capturarDatos); //callback
botonLimpiar.addEventListener("click", limpiarCarrito);
botonCop.addEventListener("click", conversion);

 //
function capturarDatos(){
     
    let producto=document.getElementById("productos").value;
    seleccionarProducto(producto);

    let cantidad=document.getElementById("cantidad").value;

    let pildora=document.getElementById("pildora");
    pildora.textContent=cantidad;
    pildora.classList.remove("invisible");
    pildora.classList.add("visible")

    let hr1=document.getElementById("hr1");
    hr1.classList.remove("invisible");
    hr1.classList.add("visible");

    let hr2=document.getElementById("hr2");
    hr2.classList.remove("invisible");
    hr2.classList.add("visible");
    
    let direccion=document.getElementById("comentarios").value;

    let fotoCarrito=document.getElementById("fotoCarrito");
    fotoCarrito.src=fotoProducto;

    let tituloCarro=document.getElementById("tituloCarrito");
    tituloCarro.textContent=nombreProducto;

    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent=`Valor unidad: $${precioProducto}USD`;

    let pesoIndividual=document.getElementById("pesoUnitarioCarrito");
    pesoIndividual.textContent=`Peso unitario: ${pesoProducto}Lb`;

    let pesoTotal=document.getElementById("pesoTotalCarrito");
    pesoTotal.textContent=`Peso Envío: ${pesoProducto*cantidad}Lb`;

    let casillero=document.getElementById("costoCasillero");
    casillero.textContent=`Valor Casillero: $${calcularCostoCasillero(pesoProducto, cantidad)}USD`;

    let impuestos=document.getElementById("impuestos");
    impuestos.textContent=`Costo venta(Impuestos): $${calcularCostoImpuestos(precioProducto, cantidad)}USD`;

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=`Costo Total:$${(calcularCostoCasillero(pesoProducto,cantidad))+(calcularCostoImpuestos(precioProducto,cantidad))}USD`;

    botonCop.classList.remove("invisible");
    botonCop.classList.add("visible");
    botonCop.addEventListener("click",CambiarMoneda);
}

function conversion(){
    moneda=true;
    let botonCop=document.getElementById("cop");
    botonCop.textContent="USD ($)"

    let cantidad=document.getElementById("cantidad").value;

    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent=`Valor unidad: $${convertirDolares(precioProducto)}COP`;

    let casillero=document.getElementById("costoCasillero");
    casillero.textContent=`Valor Casillero: $${convertirDolares(calcularCostoCasillero(pesoProducto,cantidad))}COP`;

    let impuestos=document.getElementById("impuestos");
    impuestos.textContent=`Costo venta(Impuestos): $${convertirDolares(calcularCostoImpuestos(precioProducto, cantidad))}COP`;

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=`Valor en pesos: $${convertirDolares((calcularCostoCasillero(pesoProducto,cantidad))+(calcularCostoImpuestos(precioProducto,cantidad)))}COP`;

    /*botonCop.classList.remove("visible");
    botonCop.classList.add("invisible");*/
}
    
function conversionDolar(){
    moneda=false;
    let botonCop=document.getElementById("cop");
    botonCop.textContent="COP ($)"
    console.log("entré al dolar");
    let cantidad=document.getElementById("cantidad").value;

    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent=`Valor unidad: $${convertirPesos(convertirDolares(precioProducto))}USD`;

    let casillero=document.getElementById("costoCasillero");
    casillero.textContent=`Valor Casillero: $${convertirPesos(convertirDolares(calcularCostoCasillero(pesoProducto,cantidad)))}USD`;

    let impuestos=document.getElementById("impuestos");
    impuestos.textContent=`Costo venta(Impuestos): $${convertirPesos(convertirDolares(calcularCostoImpuestos(precioProducto, cantidad)))}USD`;

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=`Valor en pesos: $${convertirPesos(convertirDolares((calcularCostoCasillero(pesoProducto,cantidad))+(calcularCostoImpuestos(precioProducto,cantidad))))}USD`;
    
    botonCop.classList.remove("invisible");
    botonCop.classList.add("visible");
}

function seleccionarProducto(opcion){
    let productos={
        nombres:Array("PS5","XBOX Serie X", "Nintendo Switch","Huion Kanvas 13","Seagate Backup Disco Duro Externo","Colores profesionales (48 colores)","American Marxism","Mochila Antirrobo","El codigo perdido","Godzilla vs King kong Blu-Ray","AMD Ryzen 5 5600X 6 núcleos","Prismacolor 3620 Premier marcadores","Cojín para aliviar el dolor de coxis y nervio ciático","Acer Chromebook laptop","Spider-Man Trilogy Blu-ray"),
        precios:Array(750,700,409,239,60,15,17,40,8,20,273,191,40,244,30),
        pesos:Array(14.2,13.1,4.75,2,0.4,1.23,0.9,1.56,1.3,0.52,0.17,3.83,1.5,2.62,1),
        fotos:Array("https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/ps5.jpg?raw=true","https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/xbox.jpg?raw=true","https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/nintendo.jpg?raw=true","https://github.com/pabloholguin08/fotoss/blob/main/tableta.jpg?raw=true","https://github.com/pabloholguin08/fotoss/blob/main/discoDuro.jpg?raw=true","https://github.com/pabloholguin08/fotoss/blob/main/colores.jpg?raw=true","https://github.com/pabloholguin08/fotoss/blob/main/libro1.jpg?raw=truem","https://github.com/pabloholguin08/fotoss/blob/main/mochila.jpg?raw=true","https://github.com/pabloholguin08/fotoss/blob/main/libro2.jpg?raw=true","https://github.com/pabloholguin08/fotoss/blob/main/pelicula1.jpg?raw=true","https://github.com/pabloholguin08/fotoss/blob/main/ryzen.jpg?raw=true","https://github.com/pabloholguin08/fotoss/blob/main/marcadores.jpg?raw=true","https://github.com/pabloholguin08/fotoss/blob/main/cojin.jpg?raw=true","https://github.com/pabloholguin08/fotoss/blob/main/laptop.jpg?raw=true","https://github.com/pabloholguin08/fotoss/blob/main/pelicula2.jpg?raw=true"),
        
    }

    if(opcion==1){
        nombreProducto=productos.nombres[0];
        precioProducto=productos.precios[0];
        pesoProducto=productos.pesos[0];
        fotoProducto=productos.fotos[0];
    }else if(opcion==2){
        nombreProducto=productos.nombres[1];
        precioProducto=productos.precios[1];
        pesoProducto=productos.pesos[1];
        fotoProducto=productos.fotos[1];
    }else if(opcion==3){
        nombreProducto=productos.nombres[2];
        precioProducto=productos.precios[2];
        pesoProducto=productos.pesos[2];
        fotoProducto=productos.fotos[2];
    }else if(opcion==4){
        nombreProducto=productos.nombres[3];
        precioProducto=productos.precios[3];
        pesoProducto=productos.pesos[3];
        fotoProducto=productos.fotos[3];
    }else if(opcion==5){
        nombreProducto=productos.nombres[4];
        precioProducto=productos.precios[4];
        pesoProducto=productos.pesos[4];
        fotoProducto=productos.fotos[4];
    }else if(opcion==6){
        nombreProducto=productos.nombres[5];
        precioProducto=productos.precios[5];
        pesoProducto=productos.pesos[5];
        fotoProducto=productos.fotos[5];
    }else if(opcion==7){
        nombreProducto=productos.nombres[6];
        precioProducto=productos.precios[6];
        pesoProducto=productos.pesos[6];
        fotoProducto=productos.fotos[6];
    }else if(opcion==8){
        nombreProducto=productos.nombres[7];
        precioProducto=productos.precios[7];
        pesoProducto=productos.pesos[7];
        fotoProducto=productos.fotos[7];
    }else if(opcion==9){
        nombreProducto=productos.nombres[8];
        precioProducto=productos.precios[8];
        pesoProducto=productos.pesos[8];
        fotoProducto=productos.fotos[8];
    }else if(opcion==10){
        nombreProducto=productos.nombres[9];
        precioProducto=productos.precios[9];
        pesoProducto=productos.pesos[9];
        fotoProducto=productos.fotos[9];
    }else if(opcion==11){
        nombreProducto=productos.nombres[10];
        precioProducto=productos.precios[10];
        pesoProducto=productos.pesos[10];
        fotoProducto=productos.fotos[10];
    }else if(opcion==12){
        nombreProducto=productos.nombres[11];
        precioProducto=productos.precios[11];
        pesoProducto=productos.pesos[11];
        fotoProducto=productos.fotos[11];
    }else if(opcion==13){
        nombreProducto=productos.nombres[12];
        precioProducto=productos.precios[12];
        pesoProducto=productos.pesos[12];
        fotoProducto=productos.fotos[12];
    }else if(opcion==14){
        nombreProducto=productos.nombres[13];
        precioProducto=productos.precios[13];
        pesoProducto=productos.pesos[13];
        fotoProducto=productos.fotos[13];
    }else if(opcion==15){
        nombreProducto=productos.nombres[14];
        precioProducto=productos.precios[14];
        pesoProducto=productos.pesos[14];
        fotoProducto=productos.fotos[14];
    }else{
        nombreProducto=null;
        precioProducto=null;
        pesoProducto=null;
        fotoProducto=null;
    }
    
}

function calcularCostoCasillero(pesoProducto,cantidad){
    let costoCasillero=0;
    let pesoTotalEnvio=pesoProducto*cantidad;

    if(pesoTotalEnvio<=20){
        costoCasillero=85;
    }else{
        let diferencia=pesoTotalEnvio-20;
        costoCasillero=85+(diferencia*2);
    }

    return costoCasillero;
}

function calcularCostoImpuestos(precioProducto,cantidad){
    const IMPUESTO_PAIS=114;
    const VALOR_SEGURO=7;

    let costoCompra=precioProducto*cantidad;
    let costoTotal=costoCompra+IMPUESTO_PAIS+VALOR_SEGURO;

    return costoTotal;
}
    
function convertirDolares(precioDolares){

    const TRM=3859; //3932 pesos equivalen a 1 dolar
    let precioPesos= precioDolares*TRM;

    return precioPesos;
}

function convertirPesos(precioPesos){
    const TRM=3859;
    let precioDolares = precioPesos/TRM;

    return precioDolares;
}

function limpiarCarrito(){
    
    let fotoCarrito=document.getElementById("fotoCarrito");
    fotoCarrito.src="https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/fotoCarrito.PNG?raw=true";

    let tituloCarro=document.getElementById("tituloCarrito");
    tituloCarro.textContent=("Tu carrito de compra está vacío");

    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent=null;

    let pesoIndividual=document.getElementById("pesoUnitarioCarrito");
    pesoIndividual.textContent=null;

    let pesoTotal=document.getElementById("pesoTotalCarrito");
    pesoTotal.textContent=null;

    let casillero=document.getElementById("costoCasillero");
    casillero.textContent=null;

    let impuestos=document.getElementById("impuestos");
    impuestos.textContent=null;

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=null;

    let pesos=document.getElementById("costoPesos");
    pesos.textContent=null;

    let pildora=document.getElementById("pildora");
    pildora.textContent=cantidad;
    pildora.classList.remove("visible");
    pildora.classList.add("invisible");

    let hr1=document.getElementById("hr1");
    hr1.classList.remove("visible");
    hr1.classList.add("invisible");

    let hr2=document.getElementById("hr2");
    hr2.classList.remove("visible");
    hr2.classList.add("invisible");

    botonCop.remove("visible")
    botonCop.add("invisible");
}

function CambiarMoneda(){
    if(moneda){

        console.log("hola");
        conversion()

    }else{
        console.log("hola2");
        conversionDolar()

    }
}