const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(a, b){
        a - b;
    }
);

function esPar(numero){
    return(numero % 2 === 0);
};

function comparar (a, b){
    return a -b;
};

function Mediana(lista){
    lista.sort(comparar);
    const mitadLista = parseInt(lista.length / 2);
    let mediana;
    if(esPar(lista.length)){
        const elemento1 = lista[mitadLista];
        const elemento2 = lista[mitadLista - 1];
        const promedioE1E2 = mediaArtimetica([elemento1, elemento2]);
        mediana = promedioE1E2;
    }else{
        mediana = lista[mitadLista];
    }
    return mediana;
};

function mediaArtimetica(lista){
    const sumaLista = lista.reduce( //Este método recibe una función, funciona para hacer un ciclo
        function (valorAcumulado = 0, nuevoElemento){ //Requiere dos parámetros
            return valorAcumulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    if(esPar(lista)){
        const personaMitad1 = lista[mitad -1];
        const personaMitad2 = lista[mitad];
        const mediana = mediaArtimetica([personaMitad1, personaMitad2]);
        return mediana;
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
};

console.log(
    medianaSalarios(salariosColSorted)
);