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

function esPar(numero){
    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }
};

function comparar (a, b){
    return a -b;
};


function cacularMediana(lista){
    lista.sort(comparar);
    const mitadLista = parseInt(lista.length / 2);
    let mediana;
    if(esPar(lista.length)){
        const elemento1 = lista[mitadLista];
        const elemento2 = lista[mitadLista - 1];
        const promedioE1E2 = calcularMediaArtimetica([elemento1, elemento2]);
        mediana = promedioE1E2;
    }else{
        mediana = lista[mitadLista];
    }
    return mediana;
};



