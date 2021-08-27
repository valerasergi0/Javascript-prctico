//Porcentajes y descuentos

const precioOriginal = 100;
const descuento = 15;


//console.log({
  //  precioOriginal,
    //descuento,
    //porcentajePrecioConDescuento,
    //precioConDescuento
//});

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = ((precio * porcentajePrecioConDescuento) / 100);
    return precioConDescuento;
}

