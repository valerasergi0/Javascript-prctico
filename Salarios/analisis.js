//Helpers
function esPar(numero){
    return(numero % 2 === 0);
};

function comparar (a, b){
    return a -b;
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

//Mediana general
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

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana del top 10%

const spliceStart = (salariosColSorted.length * (90))/100;
const spliceCount = salariosColSorted.length - spliceStart;
const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);
const medianaTopCol = medianaSalarios(salariosColTop10);
