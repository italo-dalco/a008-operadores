// # Exercício 2

// Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

// ```
// O primeiro numero é maior que segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true

// divisível = com resto zero

// Obs: O true ou false vai depender dos números inseridos e do resultado das operações.


//-------------------------------------------------------------------------------------------------------


const n1 = Number(prompt("Insira um número"))

const n2 = Number(prompt("Insira outro número"))

console.log("número 1:" , n1 , "número 2:" , n2)

console.log("O primeiro numero é maior que segundo?" , n1 > n2)

console.log("O primeiro numero é igual ao segundo?" , n1 === n2)

console.log("O primeiro numero é divisível pelo segundo?" , n1 % n2 === 0)

console.log("O segundo numero é divisível pelo primeiro?" , n2 % n1 === 0 )
