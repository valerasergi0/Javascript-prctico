const lista1 = [
    100, 
    200,
    300,
    500
];






function calcularMediaArtimetica(lista){
    //let sumaLista = 0;
    //for(let i = 0; i < lista.length;  i++){
    //    sumaLista = sumaLista + lista[i];
    //}
    const sumaLista = lista.reduce( //Este método recibe una función, funciona para hacer un ciclo
        function (valorAcumulado = 0, nuevoElemento){ //Rquiere dos parámetros
            return valorAcumulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};