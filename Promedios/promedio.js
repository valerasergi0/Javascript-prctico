function mediaArtimetica(lista){
    //let sumaLista = 0;
    //for(let i = 0; i < lista.length;  i++){
    //    sumaLista = sumaLista + lista[i];
    //}
    const sumaLista = lista.reduce( //Este método recibe una función, funciona para hacer un ciclo
        function (valorAcumulado = 0, nuevoElemento){ //Requiere dos parámetros
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


function mediana(lista){
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

function moda(lista){
    // .split() para convertir los valores del input separados por comas a un array
    const listaCount = {};
    lista.map( // Método para obtener el número de veces que se repite un elemento y convertirlo en un objeto
        function (elemento){
            if(listaCount[elemento]){
                listaCount[elemento] += 1;
            }else{
                listaCount[elemento] = 1;
            }
        }
    );
    const listaArray = Object.entries(listaCount).sort( //Recibe como argumento el objeto que se convertirá en un array
        function(a, b){
            return a[1] - b[1];
        }   
    );
    const moda = listaArray[listaArray.length - 1];
    return moda;
};

function calcularMediaAritmetica(){
    const conjunto = document.getElementById("inputConjunto");
    const conjuntoValue = conjunto.value;
    console.log(conjuntoValue)
    const lista = conjuntoValue.split(", ");
    console.log(lista);
    for(i = 0; i < lista.length; i++){
        lista[i] = lista[i].;
    }
    console.log(lista);
    const media = mediaArtimetica(lista);
    console.log(media)
    alert (media);

}


