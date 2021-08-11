let nombreConsola;
let precioConsola;
let pesoConsola;
let fotoConsola
 
let boton=document.getElementById("boton");
let botonLimpiar=document.getElementById("botonLimpiar")

boton.addEventListener("click", capturarDatos); //callback
botonLimpiar.addEventListener("click", limpiarCarrito);

 //
function capturarDatos(){
     
    let producto=document.getElementById("productos").value;
    seleccionarConsola(producto);

    let cantidad=document.getElementById("cantidad").value;
    

    let pildora=document.getElementById("pildora");
    pildora.textContent=cantidad;
    pildora.classList.remove("invisible");
    pildora.classList.add("visible")
    
    let direccion=document.getElementById("comentarios").value;

    let fotoCarrito=document.getElementById("fotoCarrito");
    fotoCarrito.src=fotoConsola;

    let tituloCarrito=document.getElementById("tituloCarrito");
    tituloCarrito.textContent=nombreConsola;

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
}

    

function seleccionarConsola(opcion){
    let consolas={
        nombres:Array("PS5","XBOX Serie X", "Nintendo Switch"),
        precios:Array(750,700,409),
        pesos:Array(14.2,13.1,4.75),
        fotos:Array("https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/ps5.jpg?raw=true","https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/xbox.jpg?raw=true","https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/nintendo.jpg?raw=true"),
        
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

    const TRM=3932; //3932 pesos equivalen a 1 dolar
    let precioPesos= precioDolares*TRM;

    return precioPesos;
}

function limpiarCarrito(){

}