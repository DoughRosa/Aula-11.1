// Exercício 1: Manipulação de Arrays
// Dado o array abaixo, realize as seguintes operações:
// const numeros = [1, 2, 3, 4, 5];

// 1. Adicione o número 6 no final do array.
// 2. Remova o último elemento do array.
// 3. Multiplique todos os elementos do array por 2.
// 4. Remova o primeiro elemento do array.
// 5. Adicione o número 0 no início do array.
// 6. Filtre apenas os números pares do array.
// 7. Some todos os elementos do array.


let numero = [1, 2, 3, 4, 5];

numero.push(6);
document.write(numero);

numero.pop();
document.write(numero);

let dobro = numero.map((numero) => numero*2);
document.write(dobro);

numero.shift();
document.write(numero);

numero.unshift(0);
document.write(numero);

let pares = numero.filter((numero) => numero%2 === 0);
document.write(pares);

let soma = numero.reduce((acc, curr) => acc+curr, 0);
document.write(soma);

