let nombreConsola;
let precioConsola;
let pesoConsola;
let fotoConsola;

 
let boton=document.getElementById("boton");
let botonLimpiar=document.getElementById("botonLimpiar");
let botonCop=document.getElementById("cop");
let botonUsd=document.getElementById("usd");

boton.addEventListener("click", capturarDatos); //callback
botonLimpiar.addEventListener("click", limpiarCarrito);
botonCop.addEventListener("click", conversion);
botonUsd.addEventListener("click", conversionDolar);


 //
function capturarDatos(){
     
    let producto=document.getElementById("productos").value;
    seleccionarConsola(producto);

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
    fotoCarrito.src=fotoConsola;

    let tituloCarro=document.getElementById("tituloCarrito");
    tituloCarro.textContent=nombreConsola;

    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent=`Valor unidad: $${precioConsola}USD`;

    let pesoIndividual=document.getElementById("pesoUnitarioCarrito");
    pesoIndividual.textContent=`Peso unitario: ${pesoConsola}Lb`;

    let pesoTotal=document.getElementById("pesoTotalCarrito");
    pesoTotal.textContent=`Peso Envío: ${pesoConsola*cantidad}Lb`;

    let casillero=document.getElementById("costoCasillero");
    casillero.textContent=`Valor Casillero: $${calcularCostoCasillero(pesoConsola, cantidad)}USD`;

    let impuestos=document.getElementById("impuestos");
    impuestos.textContent=`Costo venta(Impuestos): $${calcularCostoImpuestos(precioConsola, cantidad)}USD`;

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=`Costo Total:$${(calcularCostoCasillero(pesoConsola,cantidad))+(calcularCostoImpuestos(precioConsola,cantidad))}USD`;

    botonCop.classList.remove("invisible");
    botonCop.classList.add("visible");
}

function conversion(){
    let cantidad=document.getElementById("cantidad").value;

    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent=`Valor unidad: $${convertirDolares(precioConsola)}COP`;

    let casillero=document.getElementById("costoCasillero");
    casillero.textContent=`Valor Casillero: $${convertirDolares(calcularCostoCasillero(pesoConsola,cantidad))}COP`;

    let impuestos=document.getElementById("impuestos");
    impuestos.textContent=`Costo venta(Impuestos): $${convertirDolares(calcularCostoImpuestos(precioConsola, cantidad))}COP`;

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=`Valor en pesos: $${convertirDolares((calcularCostoCasillero(pesoConsola,cantidad))+(calcularCostoImpuestos(precioConsola,cantidad)))}COP`;

    botonCop.classList.remove("visible");
    botonCop.classList.add("invisible");

    botonUsd.classList.remove("invisible");
    botonUsd.classList.add("visible");
}
    
function conversionDolar(){
    let cantidad=document.getElementById("cantidad").value;

    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent=`Valor unidad: $${convertirPesos(convertirDolares(precioConsola))}USD`;

    let casillero=document.getElementById("costoCasillero");
    casillero.textContent=`Valor Casillero: $${convertirPesos(convertirDolares(calcularCostoCasillero(pesoConsola,cantidad)))}USD`;

    let impuestos=document.getElementById("impuestos");
    impuestos.textContent=`Costo venta(Impuestos): $${convertirPesos(convertirDolares(calcularCostoImpuestos(precioConsola, cantidad)))}USD`;

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=`Valor en pesos: $${convertirPesos(convertirDolares((calcularCostoCasillero(pesoConsola,cantidad))+(calcularCostoImpuestos(precioConsola,cantidad))))}USD`;

    botonCop.classList.remove("invisible");
    botonCop.classList.add("visible");

    botonUsd.classList.remove("visible");
    botonUsd.classList.add("invisible");
}

function seleccionarConsola(opcion){
    let consolas={
        nombres:Array("PS5","XBOX Serie X", "Nintendo Switch","Huion Kanvas 13"),
        precios:Array(750,700,409,239),
        pesos:Array(14.2,13.1,4.75,2),
        fotos:Array("https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/ps5.jpg?raw=true","https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/xbox.jpg?raw=true","https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/nintendo.jpg?raw=true","https://github.com/pabloholguin08/fotoss/blob/main/tableta.jpg?raw=true"),
        
    }

    if(opcion==1){

        nombreConsola=consolas.nombres[0];
        precioConsola=consolas.precios[0];
        pesoConsola=consolas.pesos[0];
        fotoConsola=consolas.fotos[0];

    }else if(opcion==2){

        nombreConsola=consolas.nombres[1];
        precioConsola=consolas.precios[1];
        pesoConsola=consolas.pesos[1];
        fotoConsola=consolas.fotos[1];

    }else if(opcion==3){

        nombreConsola=consolas.nombres[2];
        precioConsola=consolas.precios[2];
        pesoConsola=consolas.pesos[2];
        fotoConsola=consolas.fotos[2];

    }else if(opcion==4){

        nombreConsola=consolas.nombres[3];
        precioConsola=consolas.precios[3];
        pesoConsola=consolas.pesos[3];
        fotoConsola=consolas.fotos[3];

    }else{
        nombreConsola=null;
        precioConsola=null;
        pesoConsola=null;
        fotoConsola=null;
    }
}

function calcularCostoCasillero(pesoConsola,cantidad){
    let costoCasillero=0;
    let pesoTotalEnvio=pesoConsola*cantidad;

    if(pesoTotalEnvio<=20){
        costoCasillero=85;
    }else{
        let diferencia=pesoTotalEnvio-20;
        costoCasillero=85+(diferencia*2);
    }

    return costoCasillero;
}

function calcularCostoImpuestos(precioConsola,cantidad){
    const IMPUESTO_PAIS=114;
    const VALOR_SEGURO=7;

    let costoCompra=precioConsola*cantidad;
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