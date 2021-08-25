// Código del cuadrado
console.group("Cuadrados"); //Agrupar diferentes console.log
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es " + areaCuadrado + "cm^2");
console.groupEnd(); //Termina el grupo de console.log

//Código triángulo
console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log(
    "Los lado del triangulo miden: " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo 
    + "cm"
);
console.log("La altura del triangulo mide " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es " + areaTriangulo + "cm^2");
console.groupEnd();

//Código del círculo
console.group("Círculos");
const radioCirculo = 4;
console.log("El radio del circulo es " + radioCirculo + "cm");
const diametroCirculo = radioCirculo * 2;
console.log("El perimetro del circulo  es " + diametroCirculo + "cm");
const PI = Math.PI;


const perimetroCirculo = diametroCirculo * PI;
console.log("La circunferecia del circulo es " + perimetroCirculo + "cm");

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es " + areaCirculo + "cm^2");
console.groupEnd();