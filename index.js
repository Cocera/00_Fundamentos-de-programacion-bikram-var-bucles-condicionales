// 01 VARIABLES
let variableSinValor = undefined;

// 02 VARIABLES
let booleano1 = true;
let booleano2 = false;

// 03 VARIABLES
const PI = 3.14;

// 04 VARIABLES
const TAU = PI*2;

// 05 BOOLEANOS
let booleanoAnd = booleano1 === booleano2;

// 06 BOOLEANOS
let booleanoNot = !booleano1;

// 07 BOOLEANOS
let booleanoMix0 = (booleano1||booleano2)&&(booleano1||(!booleano1)&&(!booleano2));

// 08 OPERADORES postincremento
let incrementarDesp = 2;
resultadoDesp = incrementarDesp++;
console.log("Ej 08: " + resultadoDesp)

// 09 OPERADORES preincremento
let incrementarAntes = 2;
resultadoAntes = ++incrementarAntes;
console.log("Ej 09: " + resultadoAntes)

            // 10 BUCLES
            for (let contarHasta10_2 = 0; contarHasta10_2 <= 10; contarHasta10_2++) {
                console.log(contarHasta10_2);
            }; 

// 11 BUCLES 
let postI = 0;
let postJ = 0;  
for (let i = 0; i <= 10; i++) {
console.log(postI += postJ++);
};

// 12 BUCLES
let sumaPares = 0;
for (let i = 1; i < 10; i++) {
    if (i % 2 === 0) {
    console.log(sumaPares += i);};
}; 

// 13 VARIABLES
let variableValorNumerico = 24;

// 14 VARIABLES
const MiNombre = "Alvaro";

// 15 VARIABLES
const MiNumeroFav = 9;

// 16 BOOLEANOS
let booleanoOr = (booleano1||booleano2);

            // 17 BOOLEANOS
            let booleanoMix = (booleano1&&(TAU/2 === PI))||(variableValorNumerico>=MiNumeroFav);

// 18 BOOLEANOS
let seisNoEsNueve = (6 !== 9);

            // 19 BOOLEANOS
            /* let booleanoMix2 =  +variableValorNumerico || < -(MiNumeroFav * TAU)*/ ;

// 20 OPERADORES
let valorSuma = MiNumeroFav + variableValorNumerico;

// 21 OPERADORES
let valorResta = MiNumeroFav - variableValorNumerico;

// 22 OPERADORES
let valorMultiplicacion = MiNumeroFav * variableValorNumerico;

// 23 OPERADORES
let valorDivision = MiNumeroFav/3;

// 24 BUCLES
let contarHasta10 = 0;
do {console.log(contarHasta10++)} while (contarHasta10 !== 10);

            // 25 BUCLES
            let preJ = 0; 
            for (let preI = 0; preI <= 11; preI += ++preJ) {console.log(preI)};


            // 26 BUCLES

