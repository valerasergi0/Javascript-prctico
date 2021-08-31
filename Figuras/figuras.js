// Código del cuadrado
console.group("Cuadrados"); //Agrupar diferentes console.log


function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}
console.groupEnd(); //Termina el grupo de console.log

//Código triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;

}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
console.groupEnd();

//Código triángulo isóceles
console.group("Triángulo isóceles");

function alturaTrianguloIso(lado1, lado2, base){
    if((lado1 == lado2) && lado1 !== base){
        return Math.sqrt( (lado1**2) - ((base**2)/4) );
        
    }else{
        alert("No es un triángulo isóceles")
    }
}

console.groupEnd();

//Código del círculo
console.group("Círculos");

function diametroCirculo(radio){
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;

}

console.groupEnd();

//Funciones para los botones el en html

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value; //Sacar el valor del input ingresado por el usuario
    const perimetro = perimetroCuadrado(value);
    const result1P =  document.getElementById("result1P");
    result1P.innerText = "El perímetro de tu cuadrado es de: " + perimetro + "cm";
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value; //Sacar el valor del input ingresado por el usuario
    const area = areaCuadrado(value);
    const result1P =  document.getElementById("result1P");
    result1P.innerText = "El área de tu cuadrado es de: " + area + "cm2";

}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("input1Triangulo");
    value1 = input1.value;
    const input2 = document.getElementById("input2Triangulo");
    value2 = input2.value;
    const input3 = document.getElementById("input3Triangulo");
    value3 = input3.value;
    const perimetro = perimetroTriangulo(value1, value2, value3);
    const result2P =  document.getElementById("result2P");
    result2P.innerText = "El perímetro de tu triángulo es de: " + perimetro + "cm";
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("input3Triangulo");
    value1 = input1.value;
    const input2 = document.getElementById("input4Triangulo");
    value2 = input2.value;
    const area = areaTriangulo(value1, value2);
    const result2P =  document.getElementById("result2P");
    result2P.innerText = "El área de tu triángulo es de: " + area + "cm2";
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    value = input.value;
    const perimetro = perimetroCirculo(value);
    const result3P =  document.getElementById("result3P");
    result3P.innerText = "El perímetro de tu círculo es de: " + perimetro + "cm";
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    value = input.value;
    const area = areaCirculo(value);
    const result3P =  document.getElementById("result3P");
    result3P.innerText = "El área de tu círculo es de: " + area + "cm2";
}



