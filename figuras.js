// Código del cuadrado
console.group("Cuadrados"); //Agrupar diferentes console.log
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
//console.log("El perimetro del cuadrado es " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
}
//console.log("El area del cuadrado es " + areaCuadrado + "cm^2");
console.groupEnd(); //Termina el grupo de console.log

//Código triángulo
console.group("Triángulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;
//console.log(
    //"Los lado del triangulo miden: " 
    //+ ladoTriangulo1 
    //+ "cm, " 
    //+ ladoTriangulo2 
    //+ "cm, " 
    //+ baseTriangulo 
    //+ "cm"
//);
//console.log("La altura del triangulo mide " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;

}
//console.log("El perimetro del triangulo es " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
//console.log("El area del triangulo es " + areaTriangulo + "cm^2");
console.groupEnd();

//Código del círculo
console.group("Círculos");
//const radioCirculo = 4;
//console.log("El radio del circulo es " + radioCirculo + "cm");

function diametroCirculo(radio){
    return radio * 2;
}
//console.log("El perimetro del circulo  es " + diametroCirculo + "cm");
const PI = Math.PI;


function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//console.log("La circunferecia del circulo es " + perimetroCirculo + "cm");

function areaCirculo(radio){
    return (radio * radio) * PI;

}
//console.log("El area del circulo es " + areaCirculo + "cm^2");
console.groupEnd();