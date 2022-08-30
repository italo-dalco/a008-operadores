// # Exercício 1

// Construa um programa que:

// a) Peça ao usuário que insira um número **par**

// b) Imprima no console **o resto da divisão** desse número por 2.

// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

// d) O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código

// >💡  **Dica**:   não se esqueça de **converter** as respostas para o tipo número


//---------------------------------------------------------------------------------------------------------


const numeroPar = Number(prompt("Insira um número par"))
console.log(`O resto da divisão de ${numeroPar} por 2 é: ${numeroPar % 2}`)


//Você notou um padrão? Escreva em um comentário de código.
//Sim. Realizando a divisão por um número par, a sobra sempre será 0.

//O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código
//Sempre aparecerá no console, o resultado da sobra desse número que sempre será dividido por 2. Sempre 1.